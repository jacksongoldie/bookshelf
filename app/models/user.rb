class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher

  has_many :user_books, dependent: :destroy
  has_many :books, through: :user_books
  has_many :user_inputs, dependent: :destroy
  has_one :profile, dependent: :destroy
  
  devise :database_authenticatable,
  :jwt_authenticatable,
  :registerable,
  jwt_revocation_strategy: self

end
