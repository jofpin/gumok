$(function() {

/*
* Demo and example with GumokJS
*/
	// Data vars
	var data = {
		name: "<h1 class=\"name\">Gum<span class=\"ok\">ok</span></h1>",
		description: "Simple and stunning views with template as a chewing gum!"
	};

	// declare view
	var Pen = new Gumok.view(".gumok", data, {
		logo: function(id) {
			$(id).html("<div class=\"logo-gumok\"><p class=\"letter-g\">G</p> </div>");
		}
	});

	// Running view
	Pen.logo("#logo"); 

});
