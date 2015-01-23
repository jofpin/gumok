GumokJS
==========
[![Gitter chat](https://badges.gitter.im/jofpin/gumok.png)](https://gitter.im/jofpin/gumok)

Simple and stunning views with template as a chewing gum.

Gumok > is the union of good chewing gum!

Has your Web applications, more beautiful with this library!

You can assign direct values to a single element for example the label div etc.
I do not recommend to assign values to the label (title), because I'm not sure if it is effective in SEO with that tag.

* Hey here Demo: [http://jofpin.github.io/gumok/demo.html](http://jofpin.github.io/gumok/demo.html)
* Example two: [http://codepen.io/jofpin/pen/vEXdxZ](http://codepen.io/jofpin/pen/vEXdxZ)

* View page - [http://jofpin.github.io/gumok/](http://jofpin.github.io/gumok/)


```js
// Example > Solid and normal use with Gumok
var data = {
  firstName: "John",
  lastName:  "Doe"
};

// Running
Gumok.view("#example",data);


// view pen: http://codepen.io/jofpin/pen/JoRVGe

```

```js
// Example > With included views
var data = {
  firstName: "John",
  lastName:  "Doe"
};

// declare views
var demo = new Gumok.view("#example", data, {
  index: function() {
    document.write("<h2>Executing the view</h2>");
  },
  other: function(data) {
    document.write(data);
  }
});

// or use so, the variables included within the stack, as normal use
/* var demo = new Gumok.view("#example", {
  firstName: "John",
  lastName:  "Doe",
  index: function(data) {
    document.write("<h2>Executing the view</h2>");
  },
  other: function(data) {
    document.write("<h2>Other</h2>");
  }
}); */

// Running view
demo.index(); 
// demo.other("<h2>Other</h2>");


// view pen: http://codepen.io/jofpin/pen/JoRVGe?editors=101

```

```js
// Other Example: This is included in other file .js
Gumok.view("h1",{
  "title" : "Hello so used gumok"
});

```

```html
<!-- example to implement -->
<h1>{{title}}</h1>

<!-- Result -->
<h1>Hello so used gumok</h1>
```

This publication gave me the idea: 
* http://www.html5rocks.com/en/tutorials/webcomponents/template/ 
* https://docs.djangoproject.com/en/dev/topics/templates/

-------------

Copyright, 2014 - 2015 by [Jose Pino](http://twitter.com/jofpin)

-------------
