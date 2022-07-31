class MembersController < ApplicationController
    #before_action :authenticate_user!

    def index
        render json: User.all, status: :ok
    end

    def show
        render json: user, status: :ok
    end

    private

    def user
        User.find(params[:id])
    end
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