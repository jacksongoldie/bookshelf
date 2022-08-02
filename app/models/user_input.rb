class UserInput < ApplicationRecord
  belongs_to :book
  belongs_to :user
  has_one :review
  has_many :user_input_categories
  has_many :categories, through: :user_input_categories
  has_many :user_input_ages
  has_many :ages, through: :user_input_ages
  has_many :user_input_tags
  has_many :tags, through: :user_input_tags

  accepts_nested_attributes_for :ages
  accepts_nested_attributes_for :tags
  accepts_nested_attributes_for :categories
  accepts_nested_attributes_for :review
end
