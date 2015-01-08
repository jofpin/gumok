/**
 *
 * gumok.js
 *
 * Simple and stunning views with template as a chewing gum.
 * Version: 1.0.3
 *
 * Find the project on GitHub: 
 * https://github.com/jofpin/gumok
 *
 * ============================
 * Copyright, 2014 by Jose Pino
 * https://twitter.com/jofpin
 * ============================
 */
var gumok = (function(window, document, undefined) {
  "use strict";

  // Global > The variable, for the expression of the core (Gumok), the hearings aranque | template!
  var Gumok = window.Gumok = {};

  // setup all (objects) | self = {};
  var self = {
    id: 1,
    reset: "",
    regex: /\{{|}\}/,
    found: "These using Gumok!",
    failed: "Error in Template :(",
    credit: {
      name: "Gumok",
      version: "1.0.3",
      lastUpdate: "08-01-2015",
      code: "https://github.com/jofpin/gumok",
      author: "Jose Pino",
      twitter: "@jofpin",
      email: "jofpin@gmail.com"
    },
    credits: function() {
      self.log("CREDITS:" + " " + self.credit.name + " " + self.credit.version);
      self.log("URL: " + self.credit.code);
      self.log("Last Update: " + self.credit.lastUpdate);
      self.log("------------------------------");
      self.log("Coded by ( " + self.credit.author + ", " + self.credit.twitter + " | " + self.credit.email + ", 2014 - 2015 )");
      self.log("------------------------------");
    },
    log: function(value) {
      console.log(value);
    },
    error: function(value) {
      console.error(value);
    },
    extender: function() {
      var id = self.id; 
      var args = arguments;
      for(;id < args.length; id++)
        for(var key in args[id])
          if(args[id].hasOwnProperty(key))
              args[0][key] = args[id][key];
            return args[0];
          },
          seting: function(core, data) {
            // regex: {{id}} > preview content of var (id) | uregex - (u)nion with (regex)!
            var uregex = core.split(self.regex); 
            var count = uregex.length;
            var id = self.id;
            for (;id < count; id += 2) {
              if (data.hasOwnProperty(uregex[id])) {
                uregex[id] = data[uregex[id]];
                // If you are using Gumok!
                self.log(">" + " " + self.found); 
              } else {
                // you include the library, but you don't use it :'( 
                self.error(self.failed);
              }
            }

            // return
            return uregex.join(self.reset);
          },
          view: function() {
            // The magic starts here Gumok.view()...
            Gumok.view = function(element, args, options) {
              // element selector, to define the contents of each variable in the template!
              var query = document.querySelector(element);
              var core = query.innerHTML;
              var running = self.seting(core, args);
              
              // view (settings of template ) | (seting (f))
              query.innerHTML = running; 

              // extend process for views | options!
              self.extender(this, element, args, options);
            };
          },
          run: function() {
            // Open view (Gumok.view)
            self.view();
            // Preview credits
            self.credits();
          }
        };


        // Running functions (views | template & credits)!
        self.run(); 

})(window, document, gumok);
