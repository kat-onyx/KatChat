# == Schema Information
#
# Table name: servers
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Server < ApplicationRecord
    validates :name, presence: true 

    belongs_to :user,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :User
    
    has_many :subscriptions,
        primary_key: :id,
        foreign_key: :server_id,
        class_name: :ServerSubscription
end
