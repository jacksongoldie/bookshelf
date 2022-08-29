class AgesController < ApplicationController
    def index
        render json: Age.all, status: :ok
    end
end
