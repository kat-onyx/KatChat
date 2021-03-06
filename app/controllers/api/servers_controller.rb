class Api::ServersController < ApplicationController
       def create 
        @server = Server.new(server_params)
        @server.owner_id = current_user.id

        if @server.save
            ServerSubscription.create(user_id: current_user.id, server_id: @server.id)
            render "api/servers/show"
        else
            render json: @server.errors.full_messages, status: 422
        end

    end

    def update 
        @server = current_user.owned_servers.find(params[:id]);

        if @server.update(server_params)
            render "api/servers/show"
        else 
            render json: @server.errors.full_messages, status: 422
        end
    end

    def show
        @server = current_user.subscribed_servers.find(params[:id]);
        # TODO: do I need to handle not finding a server I own here..?
        render "api/servers/show"
    end

    def index
        @servers = current_user.subscribed_servers
        render 'api/servers/index'
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
