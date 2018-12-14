if @server 
    json.extract! @server, :id, :name, :owner_id
end
