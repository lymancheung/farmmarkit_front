

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
		$(this).siblings('.slides').slideToggle(function(){
			var slideInfo = $(this).children('.slide-info');
			var heightSum = 0;
			for (var i = 0; i < 3; i++) {
				heightSum += $(slideInfo[i]).height();
			};

			if (slideInfo.length>3) {
				$('.slides').css("max-height",heightSum+"px");
				$(this).css("overflow-y","scroll");
				console.log("hey");
			}
		});
	});//weekday click

	$(".day:first-of-type h3, .day:first-of-type").css("border-radius","30px 30px 0 0");
	$(".day:last-of-type h3, .day:last-of-type").addClass('non-curly').click(function(){
		$(this).toggleClass('non-curly');
	});

});//doc ready


