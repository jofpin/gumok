GumokJS
==========

Simple template inspired by Django html syntax.

You can assign direct values to a single element for example the label div etc.
I do not recommend to assign values to the label (title), because I'm not sure if it is effective in SEO with that tag.

* hey here Example: [http://codepen.io/jofpin/pen/LFItr](http://codepen.io/jofpin/pen/LFItr)
* Example two: [http://codepen.io/jofpin/pen/vEXdxZ](http://codepen.io/jofpin/pen/vEXdxZ)

* View page - [http://jofpin.github.io/gumok/](http://jofpin.github.io/gumok/)

```js
// Example: This is included in other file .js
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

Copyright, 2014 by [Jose Pino](http://twitter.com/jofpin)

-------------
