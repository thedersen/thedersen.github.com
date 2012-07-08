--- 
layout: post
title: Convention based configuration for Microsoft Unity
published: true
---

In a previous project, long story short, we used the [Microsoft Unity](http://unity.codeplex.com/) IoC container. After writing line upon line with configuration statements while looking at the nice convention based configuration options for other containers, I decided that enough was enough. Replacing the Unity container was sadly not an option at the moment, so I went ahead and created a convention based configuration api for Unity.

Below you can see a small example of configuring a container using registries, and I should probably apologize for the poor (or rather lack of) documentation at this time.

You get access to the configuration api by using the extension method Configure on the IUnityContainer interface.

{% highlight csharp linenos %}
var container = new UnityContainer();
container.Configure(x =>
{
  x.AddRegistry<FooRegistry>();
  x.AddRegistry<BarRegistry>();
});
{% endhighlight %}

Configuration is done in one or several registries that inherit the UnityRegistry base class.

{% highlight csharp linenos %}
public class FooRegistry : UnityRegistry
{
  public FooRegistry()
  {
    // Scan one or several assemblies and auto register types based on a
    // convention. You can also include or exclude certain types and/or
    // namespaces using a filter.
    Scan(scan =>
    {
      scan.AssemblyContaining<FooRegistry>();
      scan.With<FirstInterfaceConvention>();
      scan.With<AddAllConvention>().TypesImplementing<IHaveManyImplementations>();
      scan.With<SetAllPropertiesConvention>().OfType<ILogger>();
      scan.ExcludeType<FooService>();
    });

    // Manually register a service
    Register<IFooService, FooService>().WithName("Foo").AsSingleton();

    // Make services a singleton
    MakeSingleton<ISingletonService>();

    // You can automatically configure the container to call
    // a method on any service when they are created
    AfterBuildingUp<IStartable>().Call((c, s) => s.Start();

    // You can automatically configure the container to
    // decorate services when they are created
    AfterBuildingUp<IFooService>().DecorateWith((c, t) => new FooDecorator(t));

    // If you want to inject values or objects that are not registered in
    // the container, you can do so by adding them using this statement.
    // For instances you want the container to create, just specify the type.
    ConfigureCtorArgsFor<ServiceWithCtorArgs>("some string", typeof (IFooService));

    // Unity follows the greedy constructor pattern when creating instances.
    // If you want to use a different constructor, you specify it by listing
    // the types of the arguments in the constructor you want it to use.
    SelectConstructor<ServiceWithCtorArgs>(typeof (IFooService));
  }
}
{% endhighlight %}

At the moment, built in conventions includes AddAllConvention, FirstInterfaceConvention and SetAllPropertiesConvention. If these doesn't suit you, creating custom conventions is as easy as creating a class that implements the IAssemblyScanner interface.

{% highlight csharp linenos %}
public class CustomConvention : IAssemblyScannerConvention
{
  void IAssemblyScannerConvention.Process(Type type, IUnityRegistry registry)
  {
    if (type == typeof(FooService))
      registry.Register<IFooService, FooService>().WithName("Custom");
  }
}
{% endhighlight %}

Download
--------

The framework is available as a [NuGet package](http://nuget.org/Packages/Packages/Details/UnityConfiguration-1-2-0-0), and can be installed either using the package manager console in Visual Studio like this:

{% highlight bash linenos %}
	PM> Install-Package UnityConfiguration
{% endhighlight %}

Or by right clicking on references in your project and select the Add Library Package Reference option

![NuGet](/blog/images/unity-configuration-nuget.png)

The source code for this project is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php) and is available on my [GitHub profile](http://github.com/thedersen/unityconfiguration).