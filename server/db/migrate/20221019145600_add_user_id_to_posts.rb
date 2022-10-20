class AddUserIdToPosts < ActiveRecord::Migration[7.0]
  def up
    add_column :posts, :user_id, :integer
  end
end
