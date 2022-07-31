class BooksController < ApplicationController

    def index
        books = Book.all.order(title: :asc)
        render json: books, each_serializer: UserBooksSerializer, status: :ok
    end

    def show
        render json: book, status: :ok
    end
    # { IF NOT EXIST Book.create(title, img, google_id, mature)
        # book.author.create()
    # 
    # ELSE 

    # book.userData.create()}

    private

    def book
        book = Book.find(params[:id])
    end
end
