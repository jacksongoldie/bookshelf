class ProfilesController < ApplicationController

    def show
        render json: profile, status: :ok
    end
    
    def index
        render json: Profile.all, status: :ok
      end

    def create
        current_user.create_profile!({
            "name": profile_params[:name],
            "bio": profile_params[:bio]
        })
        if profile_params[:img]
            image = Cloudinary::Uploader.upload(profile_params[:img], :use_filename => true, :use_temp_files => true, :folder => "bookshelf")
            current_user.profile.update!(image: image['secure_url'])
        end
        render json: current_user.profile, status: :created
    end

    def update
        if profile_params[:img]
            image = Cloudinary::Uploader.upload(profile_params[:img], :use_filename => true, :folder => "bookshelf")
            current_user.profile.update!(image: image['url'])
        end
        current_user.profile.update!(profile_params)
        render json: current_user.profile, status: :created
    end

    private

    def profile
        Profile.find_by(user_id: params[:user_id])
    end
    
    def profile_params
        params.permit(:name, :bio, :image, :likes, :img)
    end
end
