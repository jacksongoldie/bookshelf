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


