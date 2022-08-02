class Book < ApplicationRecord
    has_many :user_books
    has_many :users, through: :user_books
    has_many :book_authors
    has_many :authors, through: :book_authors
    has_many :user_inputs
    has_many :categories, through: :user_inputs
    has_many :ages, through: :user_inputs
    has_many :tags, through: :user_inputs
    has_many :reviews, through: :user_inputs

    accepts_nested_attributes_for :authors
end

