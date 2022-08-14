class AddUsernameToUsers < ActiveRecord::Migration[7.0]
  def up
    change_table :users do |t|
      t.change :username, :string, unique: true
    end
  end
end
