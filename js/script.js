

$(document).ready(function() {


	var theList = $(".day");
	var kids = theList.children(".slide-info");

	$('.weekday').click(function(){
	// $('.slide-info').slideToggle();
	$(this).siblings('.slide-info').slideToggle();
	});//weekday click


	
	$('.day-7 h3').click(function(){
	$(this).toggleClass('curly');
	});//curly

	if(kids.length > 5){
		theList.children(":nth-of-type(n+6)").hide();
		
	}

	// (function(d, s, id) {
	//   var js, fjs = d.getElementsByTagName(s)[0];
	//   if (d.getElementById(id)) return;
	//   js = d.createElement(s); js.id = id;
	//   js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
	//   fjs.parentNode.insertBefore(js, fjs);
	// }(document, 'script', 'facebook-jssdk'))


	// !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
});//doc ready


