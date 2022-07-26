class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher

  has_many :user_books, dependent: :destroy
  has_many :books, through: :user_books
  has_many :user_inputs, dependent: :destroy
  has_one :profile, dependent: :destroy
  
  devise :database_authenticatable, :timeoutable, :registerable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self

  validates :email, presence: true, uniqueness: true, email: true 
  # validates :password, length: { minimum: 8 }, unless: "password.nil?"
  # validates :password, presence: true, if: "id.nil?"
end
