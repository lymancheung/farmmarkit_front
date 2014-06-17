

$(document).ready(function() {

	var targetElement = $('.container');

	var marketDays = $('.day');
	var marketDay;

	targetElement.html("");
	var nextSevenDays = getNextSevenDays();

	for (var dayIndex = 0; dayIndex < nextSevenDays.length; dayIndex++) {
		

		for(var i = 0; i < marketDays.length; i++) {
			marketDay = $(marketDays[i]);
			if(marketDay.hasClass(nextSevenDays[dayIndex])) {
				targetElement.append(marketDay);
				console.log(marketDay);
				// $(".day:first-of-type h3").css("border-radius","30px 30px 0 0");
			}
		}
	}

	function getCurrentDayOfWeek () {
		var today = new Date(Date.now());
		return today.getDay();
	}

	function getNextSevenDays () {
		var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
		var currentDayOfWeek = getCurrentDayOfWeek();
		var daysBeforeToday = days.splice(0,currentDayOfWeek);
		var nextSevenDays = $.merge(days, daysBeforeToday);
		return nextSevenDays;
	}

	function borderIt () {
		marketDay.css("background-color","red");
	}

	$('.weekday').click(function(){
		$(this).siblings('.slide-info').slideToggle();
	});//weekday click

	$(".day:first-of-type h3, .day:first-of-type").css("border-radius","30px 30px 0 0");
	$(".day:last-of-type h3, .day:last-of-type").addClass('non-curly').click(function(){
		$(this).toggleClass('non-curly');
	});
	
	

	// (function(d, s, id) {
	//   var js, fjs = d.getElementsByTagName(s)[0];
	//   if (d.getElementById(id)) return;
	//   js = d.createElement(s); js.id = id;
	//   js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
	//   fjs.parentNode.insertBefore(js, fjs);
	// }(document, 'script', 'facebook-jssdk'))


	// !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
});//doc ready


