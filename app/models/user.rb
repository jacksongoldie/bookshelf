class User < ApplicationRecord
  #ADDED FROM include Devise::JWT::RevocationStrategies::JTIMatcher
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :validatable, :registerable,
         :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

  #added from non devise-jwt tutorial
  def generate_jwt
    JWT.encode({id: id, exp: 60.days.from_now.to_i}, Rails.application.secrets.secret_key_base)
  end
end
