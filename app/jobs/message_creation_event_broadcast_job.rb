class MessageCreationEventBroadcastJob < ApplicationJob
    queue_as :default 

    def perform(message) 
        ActionCable.server.broadcast("chat_channel",
            id: message.id,
            body: message.body,
            authorId: message.author_id,
            created_at: message.created_at.strftime('%H:%M'),
            channelId: message.channel_id
            )
    end
end