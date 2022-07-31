class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :google_id, :mature, :img
  has_many :user_inputs

  # def spice
  #   debugger;
  #   array = object.user_inputs.map {|i| i.spice}
  #   array = array.compact
  #   avg = array.sum / array.length
  #   avg
  # end
#CREATE A CUSTOM SERIALIZER TO TAKE ALL THE HAS MANY ASSOCIATIONS FOR SHOW ONLY; KEEP THIS SERIALIZER FOR INDEX
end
