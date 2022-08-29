class UserInputsController < ApplicationController

    def show
        render json: user_input, status: :ok
    end

    def create
        debugger
        input =  UserInput.create!(user_input_params)
        render json: input, status: :created
    end

    def update
        debugger
        user_input.update!(user_input_params)
        if params[:tags]
            user_input.tag[0].update!(text: params[:tags])
        end

        if params[:categories]
            params[:categories].each {|c| user_input.categories.push(c)}
        end
        
        render json: user_input, status: :created
    end

    private

    def user_input
        UserInput.find(params[:id])
    end

    def user_input_params
        params.require(:user_input).permit(:user_id, :book_id, :spice, :violence, :language, categories_attributes:[:name, :id], ages_attributes: [:range, :id], tags_attributes: [])
    end
end
