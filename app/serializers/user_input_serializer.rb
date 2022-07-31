class UserInputSerializer < ActiveModel::Serializer
  attributes :id, :spice, :violence, :language, :ages, :tags, :categories, :review

  def ages
    object.ages
  end

  def tags
    object.tags
  end

  def categories
    object.categories
  end
end
