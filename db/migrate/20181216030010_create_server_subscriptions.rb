class CreateServerSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :server_subscriptions do |t|
      t.integer :server_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :server_subscriptions, [:server_id, :user_id], unique: true
    add_index :server_subscriptions, :server_id
    add_index :server_subscriptions, :user_id
  end
end
