class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :likes, :bio
  has_one :user
end
