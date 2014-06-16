/**
 *
 * gumok.js
 *
 * Simple template inspired by Django html syntax.
 * Version: 1.0.0
 *
 * Find the project on GitHub: 
 * https://github.com/jofpin/gumok
 *
 * ============================
 * Copyright, 2014 by Jose Pino
 * https://twitter.com/jofpin
 * ============================
 */
$(document).ready(function() {
  var $gumok = {
    /**
     * @return {undefined}
     * You can assign direct values to a single element for example the label div etc.
     * I do not recommend to assign values to the label (title), because I'm not sure if it is effective in SEO with that tag
     */
    root : function(element, args) {
      var $bodyGum = $(element).html();
      $(element).html($gumok.gdef($bodyGum, args));
    },

    exptemplate : /\{{|}\}/, /* Expression of template gum */

    gdef : function($bodyGum, data) {
      var $unions  = $bodyGum.split($gumok.exptemplate);
      var $counter = $unions.length;
      var id = 1;
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
    "title" : "This is an example of gumok",
    "description" : "Now create your beautiful web applications :)",
  });
  /* End app */

});
