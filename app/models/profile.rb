class Profile < ApplicationRecord
  belongs_to :user
  has_one_attached :img

  validates :name, presence: true, uniqueness: true, length: { minimum: 3, maximum: 12 }
  validates :bio, length: { maximum: 500 }
end
 