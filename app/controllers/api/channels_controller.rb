class Api::ChannelsController < ApplicationController

    def show
        @channel = Channel.find(params[:id])

        render 'api/channels/show'
    end

    def index 
        # debugger
        # @server = Server.where(server_id: current_user.subscribed_servers)
        @channels = Server.find(params[:serverId]).channels
        # @channels = Server.find(params([:serverId])).channels
        # @channels = @server.channels
        # @channels = Channel.where(server_id: current_user.subscribed_servers)

        render 'api/channels/index'
    end

    def create
        # debugger
        @server = Server.find(params[:channel][:currentServerId])

        if @server.owner_id == current_user.id
            @channel = Channel.new(channel_params)
            @channel.server_id = params[:channel][:currentServerId]
            
             if @channel.save
                render 'api/channels/show'
             else
                render json: @channel.errors.full_messages, status: 422
             end
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
        params.require(:channel).permit(:channel_name, :server_id)
    end

end
