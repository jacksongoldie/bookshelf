class Age < ApplicationRecord
    has_many :user_input_ages
    has_many :user_inputs, through: :user_input_ages
end
