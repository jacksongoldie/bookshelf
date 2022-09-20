class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :google_id, :mature, :img, :spice
  has_many :authors
  has_many :user_inputs

  def spice
    array = object.user_inputs.map {|i| i.spice}
    array = array.compact
    if array.length > 0
      avg = array.sum / array.length
      return avg
    else 
      return 'this book does not have spice votes'
    end
  end
  #####MOVE THE ABOVE TO A CUSTOM SERIALIZER AND MAKE VIO/LANG
  ####### WHAT DO WE NEED BACK ON SHOW AND WHAT ON INDEX - FINISH THEM 
#CREATE A CUSTOM SERIALIZER TO TAKE ALL THE HAS MANY ASSOCIATIONS FOR SHOW ONLY; KEEP THIS SERIALIZER FOR INDEX
end
