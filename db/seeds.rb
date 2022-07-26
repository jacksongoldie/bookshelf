# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#   AGES, AUTHORS, CATEGORIES, REVIEW, TAGS || USER PROFILE
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding."

categories = ['agender', 'asexual', 'bigender', 'bisexual', 'gay', 'genderfluid', 'lesbian', 'non-binary', 'pansexual', 'transgender (ftm)', 'transgender (mtf)', 'two spirit', 'other - not listed' ]

categories.each do |c|
    cat = Category.create!(name: c)
end

ages = ['school-aged', 'tweens', 'teens', 'young adult', 'adult', 'older readers', 'Not for Children']

ages.each do |a|
    range = Age.create!(range: a)
end

u1 = User.create!(email: 'user@example.com', password: 'password')
u2 = User.create!(email: 'user2@example.com', password: 'password')

puts "Done Seeding."
