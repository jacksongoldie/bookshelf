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
        #WILL NEED TO UPDATE TO CURRENT USERS ID
        #book.user_inputs.create(user_id: 9, categories: params[:categories])
        render json: book, include: :authors, status: :created
    end
    # { IF NOT EXIST Book.create(title, img, google_id, mature)
        # book.author.create()
        #********************************************************
    # Book.last.user_inputs.find(6).categories << Category.first
    # ELSE 

    # book.userData.create()}

    private

    def book
        book = Book.find(params[:id])
    end

    def book_params
        params.permit(:book, :title, :img, :mature, :google_id, :spice, :violence, :language, authors: [])
    end
end
