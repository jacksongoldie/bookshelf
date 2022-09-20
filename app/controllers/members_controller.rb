class MembersController < ApplicationController
    before_action :authenticate_user!
    respond_to :json

    def show
      debugger
      render json: current_user.to_json, status: :ok
    end
end