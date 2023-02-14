class Users::RegistrationsController < Devise::RegistrationsController
    respond_to :json

    private

    def respond_with(resource, _opts = {})
      register_success && return if resource.persisted?
  
      register_failed                                                     
    end
  
    def register_success
      debugger
      render json: current_user.to_json, status: :ok #{ message: 'Signed up sucessfully.' }
    end
  
    def register_failed
      render json: { errors: ["Invalid Entry"] }, status: :unprocessable_entity
    end
end
