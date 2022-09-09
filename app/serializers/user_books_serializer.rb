class UserBooksSerializer < ActiveModel::Serializer
  attributes :id, :title, :img, :mature, :google_id, :authors_string, :user_input_id
  has_many :user_inputs, each_serializer: UserInputSerializer

  def authors_string
    authors = object.authors.map {|a| a.name}
    authors.join(', ')
  end

  # def user_input
  #   uI = UserInput.find(user_input_id)
  #   uI
  # end

  def user_input_id
    uI = UserInput.where(book_id: object.id, user_id: 9 )
    uI[0].id
  end
end
