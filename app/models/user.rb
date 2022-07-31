class User < ApplicationRecord
  has_many :user_books
  has_many :books, through: :user_books
  has_many :user_inputs
  has_one :profile
  #ADDED FROM include Devise::JWT::RevocationStrategies::JTIMatcher
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :validatable, :registerable,
         :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

  #added from non devi
  def generate_jwt
    JWT.encode({id: id, exp: 60.days.from_now.to_i}, Rails.application.secrets.secret_key_base)
  end
end
