---
layout: post
title: Auto mocking with Unity and Moq
published: true
---

As mentioned in my [previous post](http://thedersen.com/2011/02/20/convention-based-configuration-for-microsoft-unity/) we used the [Microsoft Unity](http://unity.codeplex.com/) container in a previous project. We also used [Moq](http://code.google.com/p/moq/) as our mocking library. Combining these two and making an auto mocking container seemed fairly easy, so I went ahead and created something I called UnityAutoMoq.

Now, some say that auto mocking is a bad practice since it can hide certain design flaws in your system, like classes with to many dependencies etc. I say, that if you have these issues, it is probably not the auto mocking that is causing them. Auto mocking can increase your productivity, so I have no issues with using it. In fact, I encourage you to do so.

Using the container
-------------------

{% highlight csharp linenos %}
// Creating a new instance of the auto mock container
var container = new UnityAutoMoqContainer();

// Resolving a concrete class automatically creates
// mocks for the class dependencies and injects them
// before returning an instance of the class
Service service = container.Resolve<Service>();

// Resolving an interface, returns a mocked
// instance of that interface
IService mocked = container.Resolve<IService>();

// GetMock returns the mock on which you can do setup etc.
Mock<IService> mock = container.GetMock<IService>();

// Sometimes you need to cast your interface to some other type
// This is how that is done
container.ConfigureMock<IService>().As<IDisposable>();
Mock<IDisposable> disposable = container.GetMock<IService>().As<IDisposable>();
{% endhighlight %}

Download
--------

The framework is available as a [NuGet package](http://nuget.org/Packages/Packages/Details/UnityAutoMoq-2-0-1-0), and can be installed either using the package manager console in Visual Studio like this:

{% highlight bash linenos %}
PM> Install-Package UnityAutoMoq
{% endhighlight %}

Or by right clicking on references in your project and select the Add Library Package Reference option

![NuGet](/blog/images/unity-auto-moq-nuget.png)

The source code for this project is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php) and is available on my [GitHub profile](http://github.com/thedersen/unityautomoq).
