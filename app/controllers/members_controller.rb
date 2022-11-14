class MembersController < ApplicationController
    before_action :authenticate_user!
    respond_to :json

    def show
      render json: current_user.to_json, status: :ok
    end
    
    def destroy
      current_user.destroy
      head :no_content
    end
end