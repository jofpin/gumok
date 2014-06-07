/**
 *
 * gumok.js
 *
 * Simple template inspired by Django html syntax.
 * Version: 1.0.0
 *
 * Find the project on GitHub: 
 * https://github.com/mrjopino/gumok
 *
 * ============================
 * Copyright, 2014 by Jose Pino
 * https://twitter.com/mrjopino
 * ============================
 */
$(document).ready(function() {
  $gumok = {
    /**
     * @return {undefined}
     * You can assign direct values to a single element for example the label div etc.
     * I do not recommend to assign values to the label (title), because I'm not sure if it is effective in SEO with that tag
     */
    root : function(element, args) {
      $bodyGum = $(element).html();
      $(element).html($gumok.gdef($bodyGum, args));
    },

    exptemplate : /\{{|}\}/, /* Expression of template gum */
    
    gdef : function($bodyGum, data) {
      $unions = $bodyGum.split($gumok.exptemplate);
      $counter = $unions.length;
      id = 1;
      for (;id < $counter; id += 2) {
        if (data.hasOwnProperty($unions[id])) {
          $unions[id] = data[$unions[id]];
          console.log("These using Gumok > Happy code!");
        }
      }
      var segs = $unions.join("");
      return segs;
    }
  };

/* App */
  $gumok.root($("body"), {
    "title" : "<h1>Gum<span>ok</span></h1>",
    "description" : "Simple template inspired by Django html syntax.",
    "subdescription" : "Has your Web applications, more beautiful with this library!",
    "text" : "I think with gumok the world and you can make very nice web app.",
    "author" : "Jos\u00e9 Pino",
    "file" : "gumok.js",
    "url.github" : "https://github.com/mrjopino/gumok",
    "url.twitter" : "https://twitter.com/mrjopino"
  });
  /* End app */

});