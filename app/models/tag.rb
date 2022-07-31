class Tag < ApplicationRecord
    has_many :user_input_tags
    has_many :user_inputs, through: :user_input_tags
end
