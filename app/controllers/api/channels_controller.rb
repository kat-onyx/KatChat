class Api::ChannelsController < ApplicationController

    def show
        @channel = Channel.find(params[:id])

        render 'api/channels/show'
    end

    def index 
        
        @channels = Server.find(params[:server_id]).channels

        render 'api/channels/index'
    end

    def create
        @server = Server.find(params[:server_id])

        if @server.owner_id == current_user.id
            @channel = Channel.new(channel_params)
            @channel.server_id = params[:server_id]
        else
            render json: ["Only server owners can create channels."]
        end
        
        if @channel.save
            render 'api/channels/show'
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def update 
        @channel = Channel.find(params[:id])

        if @channel.update(channel_params)
            render 'api/channels/show'
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def destroy
        @channel = Channel.find(params[:id])

        if @channel 
            if @channel.server.owner_id == current_user.id 
                @channel.destroy
            else
                render json: ["Cannot delete channel"], status: 422
            end
        end
    end

    private 

    def channel_params
        params.require(:channel).permit(:channel_name)
    end

end
