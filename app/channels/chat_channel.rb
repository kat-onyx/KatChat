class ChatChannel < ApplicationCable::Channel 
   
    def subscribed
        stream_from "chat_channel"
    end

    def unsubscribed; end

    def create(opts)
    
        Message.create(
            body: opts.fetch('body'),
            channel_id: opts.fetch("channelId"),
            author_id: opts.fetch("authorId")
        )
    end
end