class Users::SessionsController < Devise::SessionsController
    respond_to :json

    # The Sessions Controller is where a user will authenticate his/her credentials and it will assign the JWT to the user if successful.

    def create
        user = User.find_by_email(params[:email])
        if user && user.valid_password?(params[:password])
          token = user.generate_jwt
          render json: token.to_json
        else
          render json: { errors: { 'email or password' => ['is invalid'] } }, status: :unprocessable_entity
        end

      end

    private

    def respond_with(_resource, _opts = {})
        render json: {
            message: 'You are logged in',
            user: current_user
        }, status: :ok
    end

    def respond_to_on_destroy
        log_out_success && return if current_user

        log_out_failure
    end

    def log_out_success
        render json: { message: 'You are logged out' }, status: :ok
    end

    def log_out_failure
        render json: { message: 'Hmm nothing happend' }, status: :unauthorized
    end
end
