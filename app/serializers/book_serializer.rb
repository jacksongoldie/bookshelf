class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :google_id, :mature, :img
end
