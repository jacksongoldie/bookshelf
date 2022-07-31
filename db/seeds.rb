# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#   AGES, AUTHORS, CATEGORIES, REVIEW, TAGS || USER PROFILE
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding."

u = User.create(email: 'goldiejackson@email.com', password: 'password')

u.create_profile(name:'Jackson', image:'img', likes: 1, bio: 'bio text')

c = Category.create(name: 'Category')
c2 = Category.create(name: 'Category 2')

t = Tag.create(text: 'tag text')

a = Age.create(range: 'Age Range String')
a2 = Age.create(range: '12-15')

ages = [a, a2]

b0 = Book.create(title: 'Book', img: '', mature: true, google_id:'00000')

b1 = Book.create(title: 'Book1', img: '', mature: true, google_id:'00001')
b2 = Book.create(title: 'Book2', img: '', mature: true, google_id:'00002')
b3 = Book.create(title: 'Book3', img: '', mature: true, google_id:'00003')

u.books.push(b0, b3)

u.books.first.user_inputs.create(user_id:u.id, spice:2, violence:0, ages:ages, categories:[c])

# HOW WILL I SEPARATE THE DATA AND GET IT TO USER -> BOOK -> DATA NOT JUST SAVE TO THE BOOK MASTER

a = Author.create(name: 'Author')
a2 = Author.create(name: 'Author2')

b2.authors.create(name:'Author3')

b2.users << u

puts "Done Seeding."
