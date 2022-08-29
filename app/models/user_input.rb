class UserInput < ApplicationRecord
  belongs_to :book
  belongs_to :user
  has_one :review, dependent: :destroy
  has_many :user_input_categories, dependent: :destroy
  has_many :categories, through: :user_input_categories
  has_many :user_input_ages, dependent: :destroy
  has_many :ages, through: :user_input_ages
  has_many :user_input_tags, dependent: :destroy
  has_many :tags, through: :user_input_tags

  accepts_nested_attributes_for :ages
  accepts_nested_attributes_for :tags
  accepts_nested_attributes_for :categories
  accepts_nested_attributes_for :review

  def categories_attributes=(categories_attributes)

    params[:categories].each {|c|
            cat = Category.find(c.id)
            self.categories << cat
        }

    # array = params[:categories].map {|c| c[:id]}
    # array.each {|id| input.categories.push(Category.find(id))}

    #     input.create_review(params[:review])
  end

  def tags_attributes=(tags_attributes)
    #SPLIT AND SAVE SEPARATELY ONCE ACTUALLY PERMITTED!!!!???????
    text = params[:tags]
    t = Tag.create(text: text)
    input.tags << t
  end

  def ages_attributes=(ages_attributes)
    params[:ages].each {|a| 
      age = Age.find(a.id)
      self.ages << age
    }
  end
    

end
