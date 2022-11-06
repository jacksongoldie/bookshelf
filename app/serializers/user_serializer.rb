class UserSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :email, :profile
  has_many :books#, serializer: UserBooksSerializer
  has_one :profile
end
