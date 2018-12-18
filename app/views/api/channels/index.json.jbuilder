@channels.each do 
    json.set! channel.id do 
        json.extract! channel, :id, :channel_id, :server_id
    end
end