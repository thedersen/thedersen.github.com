---
layout: post
title: Dependency Inversion
published: true
---

In object-oriented programming we create a lot of classes. In order for a class to be somewhat useful, it usually needs to communicate with other classes; classes depend on each other to create functionality. This dependency can also be seen as coupling between classes and different parts of our system. High coupling can make a system harder to change, and changes made can ripple through to places you didn’t foresee. Therefore we strive to have as low coupling as possible.

The Dependency Inversion Principle is one form of decoupling as it states:

1. *High-level modules should not depend on low-level modules. Both should depend on abstractions.*
2. *Abstractions should not depend upon details. Details should depend upon abstractions.*

So what does this actually mean? Let’s look at a method in a <code>BlogService</code>.

{% highlight csharp linenos %}
	public class BlogService
	{
	    private Repository _repository;

	    public BlogService()
	    {
	        _repository = new Repository();
	    }

	    public void ProcessComment(Comment comment)
	    {
	        _repository.Save(comment);

	        // Send notification to author and do other stuff here
	    }
	}
{% endhighlight %}

The <code>BlogService</code>, being the high-level module, has a dependency on the <code>Repository</code>, the low-level module. (A dependency, by the way, can easily be spotted by looking for the new keyword.)

![Image01](/blog/images/dependency-inversion-01.png)

To break this dependency, we are supposed to invert the dependency and make both the <code>Repository</code> and <code>BlogService</code> dependent to an abstraction.

To create the abstraction we introduce an interface called <code>IRepository</code>. In order to make the <code>BlogService</code> depend upon the abstraction, we need to remove the creation of the <code>Repository</code> inside of the <code>BlogService</code>. Instead we inject an <code>IRepository</code> in the constructor when we create a <code>BlogService</code> instance. This way the <code>BlogService</code> is decoupled from the Repository, and it does not really care what repository it gets, as long as it implements the <code>IRepository</code>.

{% highlight csharp linenos %}
	public interface IRepository
	{
	    void Save(Comment comment);
	}

	public class BlogService
	{
	    private IRepository _repository;

	    public BlogService(IRepository repository)
	    {
	        _repository = repository;
	    }

	    public void ProcessComment(Comment comment)
	    {
	        _repository().Save(comment);

	        // Send notification to author and do other stuff here
	    }
	}
{% endhighlight %}

To make the <code>Repository</code> depend on an abstraction and make it useful for the <code>BlogService</code>, it simply needs to implement the <code>IRepository</code> interface.

{% highlight csharp linenos %}
	public class Repository : IRepository
	{
	    public void Save(Comment comment)
	    {
	        // Save the comment
	    }
	}
{% endhighlight %}

The dependency between <code>BlogService</code> and <code>Repository</code> is now removed and both depends upon an abstraction; the <code>IRepository</code>. Both classes can easily be changed, and even replaced without affecting each other.

![Image02](/blog/images/dependency-inversion-02.png)

## Who “owns” the abstraction?

Let's say the <code>BlogService</code> belongs in the Domain or Business Layer and the <code>Repository</code> belongs in the Persistence or Data Access Layer. Before we introduced DI this made the Domain Layer depend upon the Persistence Layer. To invert this dependency we should make the Persistence Layer dependent on the Domain Layer. Therefore the <code>IRepository</code> belongs in the Domain Layer.