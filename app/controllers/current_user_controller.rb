class CurrentUserController < ApplicationController
  before_action :authenticate_user!
  def index
    render json: current_user.to_json, status: :ok
  end
end
