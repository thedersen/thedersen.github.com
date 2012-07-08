---
layout: post
title: New blog in five minutes
published: true
---

As part of learning Ruby I wanted to move my blog to the Ruby platform. I started out by creating one myself using [Ruby on Rails](http://rubyonrails.org/), but then I came across [toto](http://cloudhead.io/toto), "the tiniest blogging engine in Oz", in a [blog post by Mark Nijhof](http://cre8ivethought.com/blog/2010/08/04/blog-moved-once-again/). It looked very promising, and I decided to give it a shot. 

This walkthrough assumes that you have installed [Ruby](http://www.ruby-lang.org/en/) and [Git](http://git-scm.com/) and is somewhat familiar with using Git. Oh, and I am using a Mac, but I think it should work just as fine on Windows.

## toto

{% highlight bash linenos %}
$ sudo gem install toto
{% endhighlight %}

That's it. You have now installed the blog engine, but before you can get started writing your articles you need a toto template.

{% highlight bash linenos %}
$ git clone git://github.com/cloudhead/dorothy.git myblog
$ cd myblog
{% endhighlight %}

Dorothy is toto's default template. It's very minimalistic, but fully functional. If you want to customize it, all the files you need to change is located in the templates and public folders. It also comes with a [Rack](http://rack.rubyforge.org/) configuration file, *config.ru*, where you can configure your toto instance.

## Writing in Markdown
toto uses no database or anything except .txt files for storing articles with metadata. The articles are written in [Markdown](http://daringfireball.net/projects/markdown/) and the metadata is stored in [yaml](http://www.yaml.org/) at the very beginning of the file. Markdown is a plain text formatting syntax that gets converted to html. Its goal is to make it as readable as possible and I think they've succeeded. All you need is a simple text editor to get going.

To create a new article I recommend using the rake task for it.

{% highlight bash linenos %}
$ rake new
Title:
{% endhighlight %}

You enter the title, hit enter, and the .txt file is created with necessary metadata and saved to the articles folder.

Open the file and start writing your article. When you are done writing, you need to commit the article to the git repository.

{% highlight bash linenos %}
$ git add -A
$ git commit -m"Added new article"
{% endhighlight %}

## Hosting it
The best (in my opinion) hosting option for Ruby is [Heroku](http://heroku.com/). It's very easy to set up and it uses a pure git workflow for publishing your blog or site. For a small blog like mine, it is also completely free. No cost what so ever.

To publish your blog go to [Heroku](http://heroku.com/) and sign up for an account. Then install Heroku on your machine.

{% highlight bash linenos %}
$ sudo gem install heroku
{% endhighlight %}

After that is done, you need to make your blog a Heroku application.

{% highlight bash linenos %}
$ heroku create myblog
Created http://myblog.heroku.com
git@heroku.com:myblog.git
{% endhighlight %}

Finally, you publish it. There are two ways of doing so. You can either use the rake task that comes with Dorothy or you can use the git push command. Essentially, they both do the same thing.
{% highlight bash linenos %}
$ rake publish
{% endhighlight %}
or
{% highlight bash linenos %}
$ git push heroku master
-----> Heroku receiving push
-----> Rack app detected
-----> Launching......... done
{% endhighlight %}

Your blog is now online! If you want to use your own domain it is also possible and very easy to set up with Heroku.

## Disqus it
As part of the minimalistic approach of toto, it does not come with any custom built commentary module. For comments it uses the [Disqus service](http://disqus.com/). If you would like to enable comments, you go to [http://disqus.com/](http://disqus.com/), register for an account, and then you open the toto configuration file, config.ru, and changes
{% highlight rb linenos %}
#set :disqus, false          # disqus id, or false
{% endhighlight %}
to
{% highlight rb linenos %}
set :disqus, "YourDisqusId"  # disqus id, or false
{% endhighlight %}
People can now comment on your articles.

## Running it locally
Sometimes it can be very useful to run the blog on local machine. Especially when tweaking layout and css there can be a lot of changes. I choose to run it on the [thin web server](http://code.macournoyer.com/thin/).
{% highlight bash linenos %}
$ sudo gem install thin
{% endhighlight %}
To start the web server type:
{% highlight bash linenos %}
$ thin start -R config.ru
{% endhighlight %}
When I started it the first time I got an error
{% highlight bash linenos %}
/Library/Ruby/Gems/1.8/gems/rack-1.2.1/lib/rack/utils.rb:138:in `union': can't convert Array into String (TypeError)
{% endhighlight %}
After some Googling I found that the error was most likely caused by Rack 1.2.1. When downgrading to Rack 1.1.0 it worked, although I don't know why (yet).

When thin is running, go to http://localhost:3000 and browse your blog.

## Summary
It took me longer to write this article than to get the blog up and running. That, I think, says a lot. I really like the minimalistic approach of toto and the frictionless publishing to Heroku. I also actually like writing in markdown.

If you are considering creating a blog, or maybe moving your existing, I would definitively recommend the toto and Heroku combo. After all, it will only cost you five minutes.