if @user
    json.extract! @user, :id, :username, :email
end