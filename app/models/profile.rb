class Profile < ApplicationRecord
  belongs_to :user
  has_one_attached :img

  validates :name, presence: true, uniqueness: true, length: { maximum: 12 }
  validates :bio, length: { maximum: 500 }
end
