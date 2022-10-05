class UserBooksSerializer < ActiveModel::Serializer
  attributes :id, :title, :img, :mature, :google_id, :authors_string
  has_one :current_user_input, serializer: UserInputSerializer

  def authors_string
    authors = object.authors.map {|a| a.name}
    authors.join(', ')
  end

  def current_user_input
    UserInput.where(book_id: object.id, user_id: current_user.id)[0]
  end

  # def user_input_id
  #   debugger
  #   uI = UserInput.where(book_id: object.id, user_id: current_user.id )
  #   uI[0].id
  # end
end
