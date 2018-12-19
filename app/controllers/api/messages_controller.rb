class Api::MessagesController < ApplicationController

    def index
        @messages = 
    end

    private 

    def message_params 
        params.require(:message).permit(:body, :channel_id)
    end
end
