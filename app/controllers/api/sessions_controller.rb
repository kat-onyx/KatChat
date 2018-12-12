class Api::SessionsController < ApplicationController
    def create 
        @user = User.find_by_credentials(params[:user][:username], [:user][:password])

        if @user
            login!(@user)
            render :json "/"
        else
            render: ["Invalid login credentials"], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user 
            logout 
            render "api/users/show"
        else
            render json: ["No one currently signed in"], status 404
        end
    end
end
