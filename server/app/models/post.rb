class Post < ApplicationRecord
  validates :user_id, presence: true
  validates :title, presence: true
  validates :body, presence: true

  belongs_to :user
  has_many :comments
end
