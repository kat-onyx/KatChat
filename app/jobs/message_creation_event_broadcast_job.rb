class MessageCreationEventBroadcastJob < ApplicationJob
    queue_as :default 

    def perform(message) 
        ActionCable.server.broadcast("chat_channel_#{message.channel_id}"),
            id: message.id,
            body: message.body,
            authorId: message.author_id,
            channelId: mesage.channel_id.
            created_at: message.created_at.strftime('%H:%M')
    end
end