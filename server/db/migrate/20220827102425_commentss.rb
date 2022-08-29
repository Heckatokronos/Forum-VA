class Commentss < ActiveRecord::Migration[7.0]
  def up
    create_table "comments", force: :cascade do |t|
      t.text "body"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.references :post, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
    end
  end
end
