class UserBooksSerializer < ActiveModel::Serializer
  attributes :id, :title, :img, :mature, :google_id, :authors_string, :user_input, :review

  def authors_string
    authors = object.authors.map {|a| a.name}
    authors.join(', ')
  end

  def user_input
    object.user_inputs.find_by(user_id: 9)
  end

  def review
    Review.first
    # user_input.review.text
  end

end
