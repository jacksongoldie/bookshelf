class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :likes, :bio, :user_id
end
