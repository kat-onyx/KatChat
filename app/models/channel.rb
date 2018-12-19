# == Schema Information
#
# Table name: channels
#
#  id           :bigint(8)        not null, primary key
#  channel_name :string           not null
#  server_id    :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Channel < ApplicationRecord
    validates :channel_name, presence: true

    belongs_to :server,
        primary_key: :id,
        foreign_key: :server_id,
        class_name: :Server

    has_many :messages,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: :Message
end
