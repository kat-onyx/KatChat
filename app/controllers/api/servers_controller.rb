class Api::ServersController < ApplicationController
       def create 
        @server = Server.new(server_params)
        @server.owner_id = current_user.id

        if @server.save
            ServerSubcription.create(user_id: current_user.id, server_id: @server.id)
            render "api/servers/show"
        else
            render json: @server.errors.full_messages, status: 402
        end

    end

    def update 
        @server = current_user.owned_servers.find(params[:id]);

        if @server.update(server_params)
            render "api/servers/show"
        else 
            render json: @server.errors.full_messages, status: 402
        end
    end

    def show
        @server = current_user.subscriptions.find(params[:id]);
        
        render "api/servers/show"
    end

    def index
        @servers = current_user.subscriptions
        
        render :index
    end

    def destroy
        @server = current_user.owned_servers.find(params[:id])
        @server.destroy
    end

    private 

    def server_params
        params.require(:server).permit(:name)
    end
end
