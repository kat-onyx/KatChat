# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#

class User < ApplicationRecord
    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true}


    has_many :owned_servers,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :Server

    has_many :subscriptions,
        primary_key: :id, 
        foreign_key: :user_id,
        class_name: :ServerSubscription
    
    has_many :subscribed_servers,
        through: :subscriptions,
        source: :server

    attr_reader :password
    before_validation :ensure_session_token

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)

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
        self.save!
        self.session_token
    end

    def password=(password) 
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def valid_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
     
    # TO DO: create associations
end
