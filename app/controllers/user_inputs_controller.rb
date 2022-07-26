class UserInputsController < ApplicationController

    before_action :authenticate_user!, only: [:create, :update, :destroy]
    
    def index
        if params[:user_id]
            uI = User.find(params[:user_id]).user_inputs
        else
            uI = UserInput.all.order
        end
        render json: uI, include: :book, status: :ok
    end

    def show
        render json: user_input, status: :ok
    end

    def create
        input =  UserInput.create!({
            user_id: current_user.id,
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
            tag = Tag.find_or_create_by!({text: t[:text]})
            input.tags << tag
        }
        if user_input_params[:review_attributes]
            Review.create!({
                text: user_input_params[:review_attributes][:text], 
                rate: user_input_params[:review_attributes][:rate],
                user_input_id: input.id
            })
        end
        
        render json: input, status: :created
    end

    def update
        user_input.update!({
            spice: user_input_params[:spice],
            violence: user_input_params[:violence],
            language: user_input_params[:language]
        })
        
        user_input.categories = []
        user_input.ages = []
        if user_input_params[:user_input_categories_attributes]
            user_input_params[:user_input_categories_attributes].map {|c| 
            category = Category.find(c[:id])
            user_input.categories << category
            }
        end
        if user_input_params[:user_input_ages_attributes]
            user_input_params[:user_input_ages_attributes].map {|a|
            age = Age.find(a[:id])
            user_input.ages << age
            }
        end
        if user_input_params[:review_attributes]
            if !user_input.review 
                user_input.create_review(user_input_params[:review_attributes])
           else
                user_input.review.update!(user_input_params[:review_attributes])
           end
        end
        render json: user_input, status: :created
    end

    def destroy
        index = current_user.books.index{|b| b.id == user_input.book_id}
        current_user.books.delete(current_user.books[index])
        user_input.destroy
        head :no_content
    end

    private

    def user_input
        UserInput.find(params[:id])
    end

    def user_input_params
        #removed user_input_tags_attributes to add tag updates later!
        params.require(:user_input).permit(:user_id, :book_id, :spice, :violence, :language, user_input_categories_attributes:[:name, :id], user_input_ages_attributes: [:range, :id], user_input_tags_attributes:[:text, :id], review_attributes: [:rate, :text])
    end
end

