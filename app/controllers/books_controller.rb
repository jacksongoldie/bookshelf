class BooksController < ApplicationController
    before_action :authenticate_user!, only:[:index, :create]

    def index
        books = Book.all.order(title: :asc)
        render json: books, each_serializer: UserBooksSerializer, status: :ok
    end

    def show
        render json: book, serializer: BookSerializer, status: :ok
    end

    def create
        book = Book.find_by(google_id: book_params[:google_id])

        if !book
            book = Book.create!({
            title: book_params[:title],
            img: book_params[:img],
            mature: book_params[:mature],
            google_id: book_params[:google_id]
            })
        ####AUTHOR FIND/CREATE BY HERE INSTEAD OF OWN FETCH?
            book_params[:book_authors_attributes].map {|a| 
            book.authors << Author.find(a[:id])
            }
        end
        current_user.books << book
        render json: book, serializer: UserBooksSerializer, status: :created
    end

    private

    def book
        book = Book.find(params[:id])
    end

    def book_params
        params.require(:book).permit(:title, :img, :mature, :google_id, book_authors_attributes: [:id, :name])
    end
end
