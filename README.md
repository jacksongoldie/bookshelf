# BookShelf

![Website browse page](/client/src/components/assets/browseimage.png)

## Description

This app allows users to browse Google's Book API and save books to their "MyShelf." Users fill out a form to give feedback on character representation, recommended reader age ranges, and may leave a review. Users may view, edit, and delete their selections. Books collected by all users are kept in the database, even if the user's association with the book is removed.

![Domain model](/client/src/components/assets/domainmodel.png)

## Getting Started

This application uses:
- Ruby 2.7.4
- NodeJS (v16), and npm
- Heroku CLI
- Postgresql
- Bootstrap

Gems used:
- email-validator
- devise
- fast_jsonapi
- devise-jwt
- net-http
- cloudinary

Run
```
bundle install
npm install --prefix client
```
to have all the necessary gems and packages.

### License
[MIT](https://choosealicense.com/licenses/mit/)

