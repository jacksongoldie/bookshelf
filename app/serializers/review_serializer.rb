class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rate, :text
end
