# == Schema Information
#
# Table name: server_subscriptions
#
#  id         :bigint(8)        not null, primary key
#  server_id  :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ServerSubscription < ApplicationRecord

    belongs_to :server,
        primary_key: :id,
        foreign_key: :server_id,
        class_name: :Server
    
    belongs_to :subscriber,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end
