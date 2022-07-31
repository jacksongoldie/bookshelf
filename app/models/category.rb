class Category < ApplicationRecord
    has_many :user_input_categories
    has_many :user_inputs, through: :user_input_categories
end
