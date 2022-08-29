class UserInputSerializer < ActiveModel::Serializer
  attributes :id, :spice, :violence, :language, :ages, :tags, :categories, :review
end
