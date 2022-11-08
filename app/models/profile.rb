class Profile < ApplicationRecord
  belongs_to :user
  has_one_attached :img

  validates :name, presence: true, uniqueness: true
end
