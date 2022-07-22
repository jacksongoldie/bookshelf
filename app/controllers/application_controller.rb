class ApplicationController < ActionController::API
    respond_to :json
    before_action :process_token

    #The Application Controller is where we will process a JWT when a user sends a request to our API. It's vital to keep in mind that the Application Controller is not concerned with credentials - it simply checks for a valid JWT.

    private

    # Check for auth headers - if present, decode or send unauthorized response (called always to allow current_user)
    def process_token
        byebug
        if request.headers['Authorization'].present?
        begin
            jwt_payload = JWT.decode(request.headers['Authorization'].split(' ')[1], Rails.application.secrets.secret_key_base).first
            @current_user_id = jwt_payload['id']
        rescue JWT::ExpiredSignature, JWT::VerificationError, JWT::DecodeError
            head :unauthorized
        end
        end
    end

    # If user has not signed in, return unauthorized response (called only when auth is needed)
    def authenticate_user!(options = {})
    byebug
        head :unauthorized unless signed_in?
    end

    # set Devise's current_user using decoded JWT instead of session
    # def current_user
    #     byebug
    #     @current_user ||= super || User.find_by_email(params[:email])
    # end

    # check that authenticate_user has successfully returned @current_user_id (user is authenticated)
    def signed_in?
        @current_user_id.present?
    end

end
