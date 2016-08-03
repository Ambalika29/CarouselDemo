(function(){
	"use strict";
     var change_img_time = 4000,
      transition_speed = 400;//Setting the interval for transition

    var slideIndex = 0;
    var current, changeTimeout;
	var app = {
        bind: function(){
            $("#right_scroll").hover(function(event){
                $(this).fadeTo(1,0.4);
            },
            function(){
                $(this).fadeTo(1,0);
            });

            $("#left_scroll").hover(function(event){
                $(this).fadeTo(1,0.4);
            },
            function(){
                $(this).fadeTo(1,0);
            });

            $("#carousel_bottom").hover(function(event){
                $(this).fadeTo(1,0.4);
            },
            function(){
                $(this).fadeTo(1,0);
            });

            $("#left_scroll").click(function(){
                app.moveList("prev");
            });

            $("#right_scroll").click(function(){
                app.moveList("next");
            });

            $("#dots li").click(function(){
                var i = $("#dots li").index(this);
                app.moveList(i);
            });
        },

        moveList: function(newIndex){
            var listItem =  $("#carousel_ul").children("li");
            var dotItem = $("#dots").children("li");
            var listLength = listItem.length;
            var i = newIndex;
            if (newIndex == "prev") {
                i = (current > 0) ? (current - 1) : (listLength - 1);
            }
            if (newIndex == "next") {
                i = (current < listLength - 1) ? (current + 1) : 0;
            }
            dotItem.removeClass("active").eq(i).addClass("active");
            // listItem.eq(i).addClass("hideMe");
            listItem.hide().eq(i).show();
            current = i;
        }

        

        

	};

	$(document).ready(function(){
        app.bind();
        app.moveList("next");
        setInterval(function(){
            $("#right_scroll").trigger('click');
        },4000);
	});
})();