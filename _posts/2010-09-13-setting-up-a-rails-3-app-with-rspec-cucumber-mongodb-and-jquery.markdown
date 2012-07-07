---
layout: post
title: Setting up a Rails 3 app with RSpec, Cucumber, MongoDB and jQuery
published: true
---

With [Rails 3 released](http://weblog.rubyonrails.org/2010/8/29/rails-3-0-it-s-done), it comes with a set of new switches that let you opt out various stuff when generating apps. This makes it a bit easier to use alternatives to the default Active Record, Test::Unit etc. than it was with previous versions of Rails. Some of the options are:

	-O, [--skip-activerecord]  # Skip Active Record files
	-J, [--skip-prototype]     # Skip Prototype files
	-T, [--skip-testunit]      # Skip Test::Unit files

You can get a complete list of all the available options by running the command:

{% highlight bash linenos %}
	$ rails new --help
{% endhighlight %}

## Creating the app

{% highlight bash linenos %}
	$ sudo gem install rails
	$ rails new YourApp -OJT
	$ cd YourApp
{% endhighlight %}

The gem command will install the latest version of Rails 3. The rails command creates a new app named 'YourApp' without Active Record (-O), Test::Unit (-T), and the Prototype javascript files (-J).

## Configuring the app and the required gems

To get things working you first have to install all the required gems. Since Rails 3 introduces  [Bundler](http://gembundler.com/), the gem management is as simple as it can get.

Open your Gemfile at the root of you application and specify the gems:

{% highlight rb linenos %}
	source "http://rubygems.org"

	gem "rails", "3.0.0"
	gem "bson_ext"
	gem "mongo_mapper"

	group :test, :spec, :cucumber do
		gem "rspec"
		gem "rspec-rails", ">= 2.0.0.beta"
		gem "capybara"
		gem "cucumber"
		gem "database_cleaner"
		gem "cucumber-rails"
		gem "spork"
		gem "launchy"
	end

{% endhighlight %}

Then, install all of them by simply running:

{% highlight bash linenos %}
	$ bundle install
{% endhighlight %}

Finally, you have to tell the generators that you are not using the default stuff. You do that by editing the  config/application.rb and add these lines:

{% highlight rb linenos %}
	config.generators do |g|
		g.orm             :mongo_mapper
		g.template_engine :erb
		g.test_framework  :rspec
	end
{% endhighlight %}

## Setting up the connection to MongoDB

Create a new file, config/initializers/mongo.rb with the following content:

{% highlight rb linenos %}
	logger = Logger.new("log/mongodb-#{Rails.env}.log")
	MongoMapper.connection = Mongo::Connection.new('127.0.0.1', 27017, :logger => logger)
	MongoMapper.database = "YourApp-#{Rails.env}"
{% endhighlight %}

If you use different databases in the different environments (e.g. dev, production), go ahead and put some if-else logic in here.

## Generating the Cucumber and RSpec stuff

{% highlight bash linenos %}
	$ rails g rspec:install    
	$ rails g cucumber:install --capybara --rspec --skip-database
{% endhighlight %}

That's it. You'll now have a folder *features* for your Cucumber features and a folder *spec* for your RSpec specs.

## Adding jQuery

{% highlight bash linenos %}
	$ curl http://code.jquery.com/jquery-1.4.2.min.js > public/javascripts/jquery-1.4.2.min.js
	$ curl http://github.com/rails/jquery-ujs/raw/master/src/rails.js > public/javascripts/rails.js
{% endhighlight %}

The first line downloads jQuery 1.4.2 and saves it to your public/javascripts/ folder. The second line downloads rails.js which is a wrapper around jQuery for Rails.

Finally, specify that the javascripts should be loaded as part of the default scripts by opening the file config/application.rb and change

{% highlight rb linenos %}
	config.action_view.javascript_expansions[:defaults] = %w()
{% endhighlight %}

to

{% highlight rb linenos %}
	config.action_view.javascript_expansions[:defaults] = %w(jquery rails application)
{% endhighlight %}

And, you're done!