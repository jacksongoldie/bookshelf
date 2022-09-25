class ApplicationController < ActionController::API

    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    respond_to :json

    # #The Application Controller is where we will process a JWT when a user sends a request to our API. It's vital to keep in mind that the Application Controller is not concerned with credentials - it simply checks for a valid JWT.
    
    # private
  
    def record_invalid(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
  
    def record_not_found
      render json: { errors: 'Record not found' }, status: :not_found
    end



    # # If user has not signed in, return unauthorized response (called only when auth is needed)
    # def authenticate_user!(options = {})
    # byebug
    #     head :unauthorized unless signed_in?
    # end

    # # check that authenticate_user has successfully returned @current_user_id (user is authenticated)
    # def signed_in?
    #     byebug
    #     @current_user_id.present?
    # end

end
