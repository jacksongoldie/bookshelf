class UserInputSerializer < ActiveModel::Serializer
  attributes :id, :spice, :violence, :language, :ages, :tags, :categories, :review, :user_id
  belongs_to :book
end
