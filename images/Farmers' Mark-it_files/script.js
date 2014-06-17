
var helpMe = {};

	helpMe.init = function () {
		helpMe.sliding();
		helpMe.curly();
		helpMe.hollabackGirl();
	};

	var theList = $(".day");
	var kids = theList.children(".slide-info");

	helpMe.sliding = function (){
		$('.weekday').click(function(){
		//$('.slide-info').slideToggle();
		$(this).siblings('.slide-info').slideToggle();
		// hollabackGirl();
	});//weekday click
	};

	helpMe.curly = function () {
		$('.day-7 h3').click(function(){
		$(this).toggleClass('curly');
	});//curly
	};

	helpMe.hollabackGirl = function () {
		$(".day").each(function () {
	         kids.filter(":gt(4)");
	        if (kids.length > 5){
	            theList.children(':nth-of-type(n+6)').hide();
	        }
	   	});//filter??
	}; // close hollbackGirl


$(document).ready(function() {
	helpMe.init();
});//doc ready


