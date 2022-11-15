class UserBooksSerializer < ActiveModel::Serializer
  attributes :id, :title, :img, :mature, :google_id, :authors_string
  has_one :current_user_input, serializer: UserInputSerializer
  has_many :user_inputs


  def authors_string
    authors = object.authors.map {|a| a.name}
    authors.join(', ')
  end

  def current_user_input
    UserInput.where(book_id: object.id, user_id: current_user.id)[0]
  end

  def friend_input
    byebug
  end

end
