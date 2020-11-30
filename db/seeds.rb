# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Song.destroy_all
Album.destroy_all
User.destroy_all


@admin = User.create(username: 'admin', email: 'admin@gmail.com', password: '123456')
@album1 = Album.create(content: 'Magdalene', imgURL: 'https://upload.wikimedia.org/wikipedia/en/9/91/FKATwigs_Magdalene.png', user: @admin)
puts "#{User.count} users created"
puts "#{Album.count} albums created"
@song1 = Song.create!(name: 'Cellophane', album: @album1, imgURL: 'https://upload.wikimedia.org/wikipedia/en/9/91/FKATwigs_Magdalene.png', user: @admin)
