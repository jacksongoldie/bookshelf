class UserInputCategory < ApplicationRecord
  belongs_to :category
  belongs_to :user_input
end
