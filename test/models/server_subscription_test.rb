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

require 'test_helper'

class ServerSubscriptionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
