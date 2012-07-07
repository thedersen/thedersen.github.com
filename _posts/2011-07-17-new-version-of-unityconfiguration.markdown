---
layout: post
title: New version of UnityConfiguration
published: true
---

I just pushed a new release of [UnityConfiguration](http://github.com/thedersen/unityconfiguration) to [NuGet](http://nuget.org/List/Packages/UnityConfiguration).

So what's new in v1.3?

* Documented public facing methods
* Included the xml documentation in the NuGet package
* Debugging symbols are available on [SymbolSource.org](http://symbolsource.org)
* Several more overloads for adding assemblies to the scanner
* One more overload for adding a registry that takes an instance of a UnityRegistry
* New convention that scans for registries
* New convention that uses an overridable naming convention for registering a type mapping
* Added Transient, PerThread, PerResolve, ExternallyControlled and HierarchicalControlled lifetime scope configuration
* <code>MakeSingleton<T>()</code> and <code>MakeSingleton<T>(string)</code> is marked as obsolete. Use <code>Configure<T>().AsSingleton()</code> or <code>Configure<T>().WithName(name).AsSingleton()</code> instead
* <code>ConfigureCtorArgsFor<T>(params object[] args)</code> is marked as obsolete. Use <code>Configure<T>().WithConstructorArguments(params object[])</code> instead

Install using the package manager console in Visual Studio:

{% highlight bash linenos %}
PM> Install-Package UnityConfiguration
{% endhighlight %}

Hope you enjoy it!