class ApplicationController < ActionController::API

    def me
        render json: {key: 'words'}
    end
end
