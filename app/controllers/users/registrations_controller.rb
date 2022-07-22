class Users::RegistrationsController < Devise::RegistrationsController
    respond_to :json

    #The Registrations Controller is where a user will create his/her credentials, and it will assign the JWT to the user once complete.
    
    def create
        user = User.new(sign_up_params)

        if user.save
        token = user.generate_jwt
        render json: token.to_json
        else
        render json: { errors: { 'email or password' => ['is invalid'] } }, status: :unprocessable_entity
        end
    end

    private

    def respond_with(resource, _opts = {})
        register_success && return if resource.persisted?

        register_failed
    end

    def register_success
        render json: {
            message: 'Sign up successful',
            user: current_user
        }, status: :ok
    end

    def register_failed
        render json: { message: 'Something went wrong, please try again' }, status: :unprocessable_entity
    end

end
