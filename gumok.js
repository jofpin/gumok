/**
 *
 * gumok.js
 *
 * Simple template inspired by Django html syntax.
 * Version: 1.0.2
 *
 * Find the project on GitHub: 
 * https://github.com/jofpin/gumok
 *
 * ============================
 * Copyright, 2014 by Jose Pino
 * https://twitter.com/jofpin
 * ============================
 */
var Gumok = function() {
  return {
    reset: "",
    regex: /\{{|}\}/,
    credit: {
      name: "Gumok",
      version: "1.0.2",
      code: "https://github.com/jofpin/gumok",
      author: "Jose Pino",
      twitter: "@jofpin",
      email: "jofpin@gmail.com"
    },
    log: function(value) {
      console.log(value);
    },
    error: function(value) {
      console.error(value);
    },
    credits: function() {
      this.log("CREDITS:" + " " + this.credit.name + " " + this.credit.version);
      this.log("URL: " + this.credit.code);
      this.log("------------------------------");
      this.log("Coded by ( " + this.credit.author + ", " + this.credit.twitter + " | " + this.credit.email + ", 2014 )");
      this.log("------------------------------");
    },
    view: function(element, args){
      var body = $(element).html();
      $(element).html(this.seting(body, args));
    },
    seting: function(body, data) { 
      var unions = body.split(this.regex);
      var count = unions.length;
      for (var id = 1; id < count; id += 2) {
        if (data.hasOwnProperty(unions[id])) {
          unions[id] = data[unions[id]];
          this.log("These using Gumok!"); 
        } else {
          this.error("Error in Template :(");
        }
      }
      // return
      return unions.join(this.reset);
    }
  };
  
}(Gumok);

// Running credits 
Gumok.credits();
