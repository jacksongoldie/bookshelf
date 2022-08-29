class BooksController < ApplicationController

    def index
        books = Book.all.order(title: :asc)
        render json: books, each_serializer: UserBooksSerializer, status: :ok
    end

    def show
        render json: book, status: :ok
    end

    def create
        debugger
        book = Book.find_or_create_by(book_params)
        render json: book, status: :created
    end

    private

    def book
        book = Book.find(params[:id])
    end

    def book_params
        params.require(:book).permit(:title, :img, :mature, :google_id, book_authors_attributes: [{ author_attributes: :name}])
    end
end
