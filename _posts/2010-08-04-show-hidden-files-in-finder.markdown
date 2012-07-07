---
layout: post
title: Show hidden files in Finder
published: true
---

By convention all files starting with a dot (.) is hidden in Mac OS X. To view these files open terminal and type the following:

{% highlight bash linenos %}
$ defaults write com.apple.finder AppleShowAllFiles TRUE
$ killall Finder
{% endhighlight %}

This will show you all of the hidden files and folders on your operating system. If you want to reverse the command replace TRUE with FALSE.

That's all.