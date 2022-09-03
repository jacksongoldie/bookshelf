class UserInput < ApplicationRecord
  belongs_to :book
  belongs_to :user
  has_one :review, dependent: :destroy
  has_many :user_input_categories, dependent: :destroy
  has_many :categories, through: :user_input_categories
  has_many :user_input_ages, dependent: :destroy
  has_many :ages, through: :user_input_ages
  has_many :user_input_tags, dependent: :destroy
  has_many :tags, through: :user_input_tags

  accepts_nested_attributes_for :user_input_ages
  accepts_nested_attributes_for :user_input_tags
  accepts_nested_attributes_for :user_input_categories
  accepts_nested_attributes_for :review

    
end
