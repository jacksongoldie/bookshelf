class ProfilesController < ApplicationController

    def show
        render json: profile, status: :ok
    end

    def index
        render json: current_user.profile, status: :ok
    end

    def update
        byebug
        image = Cloudinary::Uploader.upload(profile_params[:image])
        current_user.profile.update!(profile_params)
        render json: current_user.profile, status: :created
    end

    private

    def profile
        Profile.find_by(user_id: params[:user_id])
    end
    
    def profile_params
        params.permit(:name, :bio, :likes, :image)
    end
end
