class UserSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :email
  has_many :books#, serializer: UserBooksSerializer
end
