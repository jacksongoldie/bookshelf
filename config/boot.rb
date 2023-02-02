ENV["BUNDLE_GEMFILE"] ||= File.expand_path("../Gemfile", __dir__)

require "bundler/setup" # Set up gems listed in the Gemfile.
require "bootsnap/setup" # Speed up boot time by caching expensive operations.

require 'active_record'
require 'uri'
uri = URI.parse(ENV['postgres://xesqpbvd:XFdqTNTfMcCbPQsvslsM5A_V43IePRZN@kashin.db.elephantsql.com/xesqpbvd'] || 'postgres://localhost/contacts')

ActiveRecord::Base.establish_connection(adapter: 'postgresql', host: uri.host, username: uri.user, password: uri.password, database: uri.path.sub('/', ''))

