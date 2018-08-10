(function($){
/*----------------------------initial setup----------------------------------------------------------*/

$(function(){
	initRollovers();
	initMovie();
});

///------rollover
var initRollovers = function() {
	var preload = new Array();
	var source;
	var images = $('img.imgover').each(function(){
		var jqt = $(this);

		var path_array = jqt.attr('src').split(".");
		var ext = path_array.pop();
		var path = path_array.join(".");

		var basesrc = path + '.' + ext;
		var addsrc = basesrc;
		if (!path.match(/-over$/)) addsrc = path + "-over." + ext;

		jqt.attr('data-basesrc', basesrc).attr('data-addsrc', addsrc);
		preload.push(new Image());
		preload[preload.length - 1].src = addsrc;

		jqt.hover(function(){
			jqt.attr('src', jqt.attr('data-addsrc'));
		}, function(){
			jqt.attr('src', jqt.attr('data-basesrc'));
		})
	});
}

/*----------------------------movie ----------------------------------------------------------*/
var initMovie = function() {
	var currentVideo = null;

	// link
	$('[data-video]').click(function(e){
		e.preventDefault();

		var videoclass = $(this).attr('data-video');

		$('#over_movie > div').hide();
		$('#over_movie').find('.' + videoclass).show();

		$('body').toggleClass('movie');

		window.setTimeout(function(){
			var om = $('#over_movie');
			om.addClass('fade');
			if (om.hasClass('loaded')) {
				videoControl.play($("." + videoclass + " iframe"));
			} else {
				om.addClass('playwait');
			}
		}, 50);

		return false;
	})

	$('#over_movie').click(function(){
		videoControl.close();
	})

	// Vimeo API
	var post = function(elementJq, act, val) {
		var data = { "method": act };
		if (val != null) data.value = val;

		var url = elementJq.attr('src').split('?')[0].replace(/^\/\//, "http://");
		var data_stt = JSON.stringify(data);

		elementJq[0].contentWindow.postMessage(data_stt, url);
	}

	var videoControl = {
		play: function(target) {
			post(target, 'play');
			currentVideo = target;
		},
		close: function(target) {
			if (!target) target = currentVideo;
			post(target, 'stop');
			currentVideo = null;

			// fade out
			target.attr('src', target.attr('src'));
			$('#over_movie').removeClass('fade');
			window.setTimeout(function(){
				$('body').removeClass('movie');
				$('#over_movie').removeClass('loaded');
			}, 350)
		}
	}

	$(window).on('message', function(e){
		var d = e.originalEvent.data;
		if (d) {
			var jObj = null;
			try {
				jObj = JSON.parse(d);
			} catch(ee) {}

			if (jObj) {
				var om = $('#over_movie');
				var video_iframe = $("#" + jObj.player_id);

				switch(jObj.event) {
					case 'ready':
						// event
						post(video_iframe, "addEventListener", "finish");
						video_iframe.addClass('loaded');

						// set loaded class
						if (om.find('iframe:not(.loaded)').length == 0) 
						{
							om.addClass('loaded');
							if (om.hasClass('playwait')) {
								videoControl.play(video_iframe);
								om.removeClass('playwait');
							}
						}
						break;
					case 'finish':
						videoControl.close(video_iframe);
						break
				}
			}
		}
	});
}

})(jQuery);

