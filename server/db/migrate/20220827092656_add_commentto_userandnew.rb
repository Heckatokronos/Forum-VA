class AddCommenttoUserandnew < ActiveRecord::Migration[7.0]
  def up 
    create_table "comments", force: :cascade do |t|
      t.string :user_id
      t.text :body
      t.references :post, null: false, foreign_key: true

      t.timestamps
    end
  end
end
