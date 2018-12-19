class ChatChannel < ApplicationCable::Channel 
    def subscribed
        stream_for "chat_channel_#{params[:channel_id]}"
    end

    def unsubscribed; end

    # def create(opts)
    #     Message.create(body: opts.fetch('body'))
    # end
end