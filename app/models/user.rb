class User < ApplicationRecord
    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true}

    attr_reader :password
    before_validation :ensure_session_token

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username, password: password)

        if user && user.valid_password?(password)
            return user
        else
            return nil
        end
    end
    
    def ensure_session_token 
        self.session_token ||= self.class.generate_session_token
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
    end

    def password=(password) 
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def valid_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

end