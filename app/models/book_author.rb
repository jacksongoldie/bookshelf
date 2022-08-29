class BookAuthor < ApplicationRecord
  belongs_to :author
  belongs_to :book

  def author_attributes=(hash)
    self.author = Author.find_or_create_by(hash)
  end
end
