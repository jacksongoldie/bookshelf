# Google Books API

GET https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?projection=lite&key=AIzaSyCAzfvCo4D0qLG1hV8WfEYpNC8rhtk7rQY

example with a query
https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyCAzfvCo4D0qLG1hV8WfEYpNC8rhtk7rQY


WED MAY 25
=CLEAN AND COMMIT
=LEFT OFF AT PAGINATION/INDEX IN FETCH AND ADDING A PAGINATION BUTTON TO BROWSE(SEP COMPONENT)
=WORK ON DOMAIN MODEL FOR USER, REDUX
=ADD A MYSHELF FORM COMPONENT THAT TAKES GOOGLE BOOK INFO AND ADDS USER INPUTS (DOES NOT HAVE TO DO MORE THAN BE A FORM WITH ALL ATTRIBUTES WE NEED FOR NOW)

# Devise notes
change for production??
Depending on your application's configuration some manual setup may be required:

  1. Ensure you have defined default url options in your environments files. Here
     is an example of default_url_options appropriate for a development environment
     in config/environments/development.rb:

       config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
  In production, :host should be set to the actual host of your application.

     * Required for all applications. *

  2. Ensure you have defined root_url to *something* in your config/routes.rb.
     For example:

       root to: "home#index"
     
     * Not required for API-only Applications *

  3. Ensure you have flash messages in app/views/layouts/application.html.erb.
     For example:

       <p class="notice"><%= notice %></p>
       <p class="alert"><%= alert %></p>

     * Not required for API-only Applications *

  4. You can copy Devise views (for customization) to your app by running:

       rails g devise:views
       
     * Not required *




**not suitable for children value isn't updating

AUGUST 29
------------
How do I keep from running sudo service postgresql start every time I exit VS code?
*categories on MyShelfEditForm option.id set to key isn't working, can't send ID back to db
Fix age, cat, tag serializers so they don't give created at and updated at when going to update user_input_params

9/25
------
addfrombrowse test
not suitable for children triggers blocked other ranges
error handling for fetch reqs

testing issues
---------------
on editing inputs of saved books, changes to ranges for ages is persisting but not reflecting in state(only on ADDING a range)
on deleting books from shelf, not working????
adding book, not updating state for inputs?

Deployment
-----------
secret key BS ugh