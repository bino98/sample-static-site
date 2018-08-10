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

//ページ内リンク
$(document).ready(function(){
	$('a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
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