GumokJS
==========

Simple template inspired by Django html syntax.

You can assign direct values to a single element for example the label div etc.
I do not recommend to assign values to the label (title), because I'm not sure if it is effective in SEO with that tag.


```js
// Example: This is included in gumok.js
$gumok.root($("h1"), {
  "title" : "Hello so used gumok"
});
```

```html
<!-- example to implement -->
<h1>{{title}}</h1>

<!-- Result -->
<h1>Hello so used gumok</h1>
```
-------------

Copyright, 2014 by [José Pino](http://twitter.com/mrjopino)

-------------
