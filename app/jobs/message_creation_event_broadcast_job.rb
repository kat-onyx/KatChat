class MessageCreationEventBroadcastJob < ApplicationJob
    queue_as :default 

    def perform(message) 
        ActionCable.server.broadcast("chat_channel",
            id: message.id,
            body: message.body,
            author_id: message.author_id,
            created_at: message.created_at.strftime('%H:%M'),
            channel_id: message.channel_id
            )
    end
end