class AuthorsController < ApplicationController
    def create
        authors = []
        author_params[:name].map {|a| 
            author = Author.find_or_create_by(name: a)
            authors << author
        }
        render json: authors, status: :created
    end

    private 

    def author_params
        params.require(:author).permit(name: [])
    end
end
