---
layout: post
title: Backbone.Validation
published: true
---
Update: If you are looking for documentation for Backbone.Validation it can be found [here](http://thedersen.com/backbone.validation/)

I just released version 0.2.0 of my [validation plugin](http://github.com/thedersen/backbone.validation) for [Backbone.js](http://backbonejs.org/). The plugin lets you declare validation rules on your Backbone model, ensuring that input from the user is valid. It currently ships with 18 built-in validators such as required, min, max, range, length, minLength, maxLength, regex-validator etc. In addition to the built-in validators, it is very easy to extend with your custom validators.

Lets start with an example of how to declare validation rules on your model:

{% highlight js linenos %}
var SomeModel = Backbone.Model.extend({
  validation: {
    name: {
      required: true,
      msg: 'Name is required'
    },
    age: {
      range: [1, 80]
    },
    email: {
      pattern: 'email'
    },
    someAttribute: function(value) {
      if(value !== 'somevalue') {
        return 'Error';
      }
    }
  }
});
{% endhighlight %}

To configure your validation rules, simply add a validation object with a property for each attribute you want to validate on your model. The validation rules can either be an object with one of the built-in validators or a combination of two or more of them, or a function where you implement your own custom validation logic. If you want to provide a custom error message when using one of the built-in validators, simply define the `msg` property with your message.

To add your own validators, extend the `Backbone.Validation.validators` object as shown in the example below where we use [underscore.js](http://underscorejs.org) `extend` method. You can also redefine one or more of the built-in validators if it doesn't fit your needs.

{% highlight js linenos %}
_.extend(Backbone.Validation.validators, {
  myValidator: function(value, attr, customValue, model) {
    if(value !== customValue) {
      return 'error';
    }
  },
  required: function(value, attr, customValue, model) {
    if(!value) {
      return 'My version of the required validator';
    }
  },
});

var Model = Backbone.Model.extend({
  validation: {
    age: {
      myValidator: 1 // uses your custom validator
    }
  }
});
{% endhighlight %}

A couple conventions
--------------------

After performing validation, an `isValid` attribute is set on the model that is (obviously) `true` when all the attributes on the model is valid, otherwise it is `false`.

The `Backbone.Validation.callbacks` contains two methods: `valid` and `invalid`. These are called (in addition to the error event raised by Backbone) after validation of an attribute is performed.

The default implementation of invalid tries to look up an element within the view with an id equal to the name of the attribute that is validated. If it finds one, an invalid class is added to the element as well as a data-error attribute with the error message. The valid method removes these if they exists. You can also configure it to use a class selector instead of id selector.

As with the validators, you can redefined the behavior of these callbacks by overriding the implementation.

{% highlight js linenos %}
_.extend(Backbone.Validation.callbacks, {
  valid: function(view, attr, selector) {
    // do something
  },
  invalid: function(view, attr, error, selector) {
    // do something
  }
});
{% endhighlight %}

Validation binding
------------------

For all of this to work, you need to hook up the validation. The validation binding code is executed with a call to `Backbone.Validation.bind(view)`. The [validate](http://backbonejs.org/#Model-validate) method on the view's model is then overridden to perform the validation.

There are several places that it can be called from, depending on your circumstances.

{% highlight js linenos %}
// Binding when rendering
var SomeView = Backbone.View.extend({
  render: function(){
    Backbone.Validation.bind(this);
  }
});

// Binding when initializing
var SomeView = Backbone.View.extend({
  initialize: function(){
    Backbone.Validation.bind(this);
  }
});

// Binding from outside a view
var SomeView = Backbone.View.extend({
});
var someView = new SomeView();
Backbone.Validation.bind(someView);
{% endhighlight %}

Summary
-------

With this declarative way of defining validation, combined with the conventional updating of your user interface, it makes for an easy way to handle client validation. At least I think so.

But remember: you add client validation to be nice to your users, but you also need to add server validation to be nice to yourself and your company.

The source code for this project is licensed under the [MIT License](http://thedersen.mit-license.org/) and is available on [GitHub](https://github.com/thedersen/backbone.validation).
