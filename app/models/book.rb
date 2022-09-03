class Book < ApplicationRecord
    has_many :user_books, dependent: :destroy
    has_many :users, through: :user_books
    has_many :book_authors, dependent: :destroy
    has_many :authors, through: :book_authors
    has_many :user_inputs, dependent: :destroy
    has_many :categories, through: :user_inputs
    has_many :ages, through: :user_inputs
    has_many :tags, through: :user_inputs
    has_many :reviews, through: :user_inputs

    accepts_nested_attributes_for :book_authors

    validates :google_id, uniqueness: true
end

