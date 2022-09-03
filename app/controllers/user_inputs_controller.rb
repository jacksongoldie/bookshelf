class UserInputsController < ApplicationController

    def show
        render json: user_input, status: :ok
    end

    def create
        debugger
        input =  UserInput.create!({
####################CHANGE USER TO CURRENT USER??
            user_id: user_input_params[:user_id],
            book_id: user_input_params[:book_id],
            spice: user_input_params[:spice],
            violence: user_input_params[:violence],
            language: user_input_params[:language]
        })
        user_input_params[:user_input_categories_attributes].map {|c| 
            category = Category.find(c[:id])
            input.categories << category
        }
        user_input_params[:user_input_ages_attributes].map {|a| 
            age = Age.find(a[:id])
            input.ages << age
        }
        user_input_params[:user_input_tags_attributes].map {|t| 
            tag = Tag.create!({text: t[:text]})
            input.tags << tag
        }
        
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
        params.require(:user_input).permit(:user_id, :book_id, :spice, :violence, :language, user_input_categories_attributes:[:name, :id], user_input_ages_attributes: [:range, :id], user_input_tags_attributes: [:text], user_input_review_attributes: [:rate, :text])
    end
end
