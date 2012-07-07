---
layout: post
title: UnityConfiguration 1.4 is out
published: true
---

Some minor improvements has been made, issues are closed, and here's the new version for you.
<!--more-->
So, what's changed in v1.4?

* Added extension methods to the `IAssemblyScanner` for easier discovery and configuration of conventions
	* `scan.WithFirstInterfaceConvention()`
	* `scan.WithNamingConvention()`
	* `scan.WithAddAllConvention()`
	* `scan.WithSetAllPropertiesConvention()`
* Added non-generic overload to the `AddAllConvention` that allows you to register open generic interfaces
	* `scan.WithAddAllConvention().TypesImplementing(typeof(IHandler<>))`
* Added option on the `IAssemblyScanner` interface to scan for internal types in an assembly
	* `scan.InternalTypes()`
* Strong named the assembly
* Switched to [Semantic Versioning](http://semver.org/). In short this means that when
	* the major number is changed: There will be breaking changes
	* the minor number is changed: New features are added, but it is still backwards compatible
	* the patch number is changed: Backwards compatible bugs fixes only

As usual you can install it via [NuGet](http://nuget.org/List/Packages/UnityConfiguration) using the package manager in Visual Studio:
{% highlight bash linenos %}
PM> Install-Package UnityConfiguration 
{% endhighlight %}
or, if you like, you can grab the code at [GitHub](http://github.com/thedersen/unityconfiguration).

Hope you enjoy it!

