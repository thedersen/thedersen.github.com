---
layout: post
title: Installing RSpec TextMate Bundle
published: true
---

For future reference, this is how to install and update the RSpec TextMate Bundle. The bundle can be found in the [RSpec Git repository](http://github.com/dchelimsky/rspec-tmbundle).

To install, open a terminal window and type:
{% highlight bash linenos %}
	$ cd /Applications/TextMate.app/Contents/SharedSupport/Bundles
	$ git clone git://github.com/dchelimsky/rspec-tmbundle.git RSpec.tmbundle
{% endhighlight %}
The output should be something like:
{% highlight bash linenos %}
	remote: Counting objects: 46507, done.
	remote: Compressing objects: 100% (10783/10783), done.
	remote: Total 46507 (delta 33212), reused 46206 (delta 33056)
	Receiving objects: 100% (46507/46507), 5.94 MiB | 882 KiB/s, done.
	Resolving deltas: 100% (33212/33212), done.
{% endhighlight %}
Now, reload your bundles in TextMate from the 'Bundles > Bundle Editor > Reload Bundles' menu.

To update, simply open a terminal window and type:
{% highlight bash linenos %}
	$ cd /Applications/TextMate.app/Contents/SharedSupport/Bundles/RSpec.tmbundle
	$ git pull
{% endhighlight %}