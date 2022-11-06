class CurrentUserController < ApplicationController
  before_action :authenticate_user!
  def index
    user = current_user.to_json
    byebug
    render json: user, include: [:profile], status: :ok
  end
end
