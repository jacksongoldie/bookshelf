class Users::SessionsController < Devise::SessionsController
    respond_to :json
    before_action :authenticate_user!

    # The Sessions Controller is where a user will authenticate his/her credentials and it will assign the JWT to the user if successful.

      private

      def respond_with(resource, _opts = {})
        render json: [{
          status: {code: 200, message: 'Logged in sucessfully.'},
          data: UserSerializer.new(resource).serializable_hash[:data][:attributes]
        }], status: :ok
      end
  
    def respond_to_on_destroy
      if current_user
        render json: {
          status: 401,
          message: "Couldn't find an active session."
        }, status: :unauthorized
      else
        render json: {
          status: 200,
          message: "logged out successfully"
        }, status: :ok
      end
    end
end
 