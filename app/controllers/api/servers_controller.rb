class Api::ServersController < ApplicationController
       def create 
        @server = Server.new(server_params)
        @server.owner_id = current_user.id

        if @server.save 
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
        @server = current_user.subscribed_servers.find(params[:id]);
        # TODO: implement subs table
        render "api/servers/show"
    end

    def index
        @servers = current_user.subscriptions
        # TODO: implement subs
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
