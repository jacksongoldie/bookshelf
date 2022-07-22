class MembersController < ApplicationController
    before_action :authenticate_user!

    def show
        
        render json: {
            message: 'you are in!',
            user: user
        }
    end

    private

    # def get_user_from_token
    #     # jwt_payload = JWT.decode(request.headers['Authorization'].split(' ')[1],
    #     #                          Rails.application.credentials.devise[:jwt_secret_key]).first

    #     jwt_payload = JWT.decode(request.headers['Authorization'].split(' ')[1].remove('"'), Rails.application.secrets.secret_key_base).first
    #     @current_user_id = jwt_payload['id']
    #     rescue JWT::ExpiredSignature, JWT::VerificationError, JWT::DecodeError
    #     head :unauthorized
    #     end
    #     byebug
    #     user_id = jwt_payload['sub']
    #     User.find(user_id.to_s)
    # end


end