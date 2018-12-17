class Api::ServerSubscriptionsController < ApplicationController
    def create 
       
        @server = Server.find_by(name: params[:server][:name])
        if @server.nil?
            return render json: ["Invalid server name"], status: 422
        end
        
        @server_subscription = ServerSubscription.new(user_id: current_user.id, server_id: @server.id)
        if @server_subscription.save 
            render 'api/servers/show'
        else
            render json: @server_subscription.errors.full_messages, status: 422
        end
    end

    def destroy
        @subscription = current_user.subscriptions.find_by(server_id: params[:id])
        if @subscription.user_id === current_user.id
            @subscription.destroy
            render 'api/servers/show'
        else
            render @subscription.errors.full_messages, status: 422
        end
    end

   
    def subscription_params
        params.require(:server_subscription).permit(:name)
    end
end
