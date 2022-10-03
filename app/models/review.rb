class Review < ApplicationRecord
    belongs_to :user_input

    validates :text, length: { maximum: 800 }
end
