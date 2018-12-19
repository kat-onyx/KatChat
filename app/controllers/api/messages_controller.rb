class Api::MessagesController < ApplicationController

    def index
        @messages = Channel.find_by(channel_id: params[:id]);
    end

    def show
    end

    def create 
        @channel = Channel.find(params[:message][:channel_id])

        if @channel 
            @message = Message.new(message_params)
            @message.channel_id = params[:message][:channel_id]
            @message.author_id = current_user.id
            if @message.save
                render 'api/messages/show'
            else
                render json: @message.errors.full_messages, status: 422
            end
        end
    end

    def update

    end

    def destroy
    end

    private 

    def message_params 
        params.require(:message).permit(:body, :channel_id)
    end
end
