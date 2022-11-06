class CurrentUserController < ApplicationController
  before_action :authenticate_user!
  def index
    user = current_user.to_json
    render json: user, each_serializer: UserSerializer, status: :ok
  end
end
