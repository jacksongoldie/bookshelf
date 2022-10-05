class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :google_id, :mature, :img, :spice, :violence
  has_many :authors
  #has_many :user_inputs

  def spice
    array = object.user_inputs.map {|i| i.spice}
    array = array.compact
    spice_array = array.filter{|s| s > 0}
    if spice_array.length > 0
      avg = spice_array.sum / spice_array.length
      return avg
    else 
      return 'this book does not have spice votes'
    end
  end

  def violence
    array = object.user_inputs.map{|i| i.violence}
    array = array.compact
    violence_array = array.filter{|v| v > 0}
    if violence_array.length > 0
      avg = violence_array.sum / violence_array.length
      return avg
    else 
      return 'this book does not have violence votes'
    end
  end

  def language
    array = object.user_inputs.map{|i| i.language}
    array = array.compact
    language_array = array.filter{|l| l > 0}
    if language_array.length > 0
      avg = language_array.sum / language_array.length
      return avg
    else 
      return 'this book does not have violence votes'
    end
  end
end
