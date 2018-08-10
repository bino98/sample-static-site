jQuery(function(){	
								
	// fadeImg
	$('.fadeImg').mouseover(
		function()
			{
				$(this).fadeTo(200,0.7);
			}
		)
	;
	$('.fadeImg').mouseout(
		function()
			{
				$(this).fadeTo(200,1);
			}
		)
	;
	
	// blank指定
	$("a.blank").attr("target", "_blank");
	

});

// btn
$(function() {
	$('#sec07 p a img').hover(
		function () {$(this).stop().animate({'marginTop':'-117px'}, 300);},
		function () {$(this).stop().animate({'marginTop':'0px'}, 300);}
	);
});
$(function() {
	$('#sec01 h2 a img').hover(
		function () {$(this).stop().animate({'marginTop':'-70px'}, 300);},
		function () {$(this).stop().animate({'marginTop':'0px'}, 300);}
	);
});

// SNS (Facebook, Twitter)
$(function() {
	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "http://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.0";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
});