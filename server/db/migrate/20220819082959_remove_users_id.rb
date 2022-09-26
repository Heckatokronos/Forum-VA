class RemoveUsersId < ActiveRecord::Migration[7.0]
  def change
    remove_column :posts, :users_id
  end
end
