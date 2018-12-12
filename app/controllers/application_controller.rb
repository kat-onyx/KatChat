class ApplicationController < ActionController::Base

    helper_methods :current_user, :signed_in, :ensure_signed_in 

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login!(user) 
        @current_user = user 
        session[:session_token] = @current_user.reset_session_token!
    end
    
    def logout
        @current_user.reset_session_token!
        session[:session_token] = nil 
        @current_user = nil
    end

    def signed_in?
        !!current_user
    end

    def ensure_signed_in
        unless current_user
            render json: ['Your credentials are invalid'], status: 404
        end
    end

end
