class UserSerializer < ActiveModel::Serializer
  attributes :id, :email
  has_many :books, serializer: UserBooksSerializer
end
