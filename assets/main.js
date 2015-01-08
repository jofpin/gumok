/* scrolling for head */
   var scrollEffect = function() {
    $(window).scroll(function() {
      var scrollHeader = {
        winTop: $(window).scrollTop(),
        size: 15
      }
      if(scrollHeader.winTop >= scrollHeader.size) {
        $("header.header").addClass("sticky");
        $(".header .master-head").addClass("sticky");
      }
    });
  };

scrollEffect();

// Awepush 
Awepush(".header", 4);
