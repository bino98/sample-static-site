var lastWidth, resize;

$(document).ready(function() {
  var lupinsize, opsize;
  opsize = 2;
  if ($(window).width() < 768) {
    opsize = 4;
  }
  $('#mv').imagesLoaded(function() {
    $('#opening img, #resizer img').each(function() {
      return $(this).width($(this).width() / opsize);
    });
    $('#mv').addClass('on');
    return setTimeout(function() {
      $('#switch').addClass('fadedIn');
      $('#pagetop').addClass('on');
      return $('body').css({
        'overflow': 'auto'
      });
    }, 9600);
  });
  $('#switch, #menu .close').click(function() {
    $('#switch').toggleClass('on');
    return $('#menu').toggleClass('on');
  });
  $('a').click(function() {
    if (!$(this).attr('href') && $('#' + $(this).attr('class')).length > 0) {
      $('html,body').animate({
        scrollTop: $('#' + $(this).attr('class')).offset().top
      });
      return $('#switch, #menu').removeClass('on');
    }
  });
  $('#pagetop').click(function() {
    return $('html,body').animate({
      scrollTop: 0
    });
  });
  lupinsize = 2;
  if ($(window).width() < 768) {
    lupinsize = 6;
  }
  $('#mv').imagesLoaded(function() {
    return $('#mv .lupin img').each(function() {
      return $(this).width($(this).width() / lupinsize);
    });
  });
  $('#entry').imagesLoaded(function() {
    return $('#entry .lupin img').each(function() {
      return $(this).width($(this).width() / lupinsize);
    });
  });
  $(window).scroll(function() {
    if (!$('#entry').hasClass('on') && $(window).scrollTop() > ($('#entry').offset().top - ($(window).height() / 1.4))) {
      return $('#entry').addClass('on');
    }
  });
  return $('p span').each(function(i, elem) {
    return $(window).scroll(function() {
      if (!$(elem).hasClass('on') && $(window).scrollTop() > ($(elem).offset().top - ($(window).height() / 1.4))) {
        return $(elem).addClass('on');
      }
    });
  });
});

resize = null;

lastWidth = $(window).width();

$(window).resize(function() {
  var lupinsize;
  if ($(window).width() === lastWidth) {
    return;
  }
  lupinsize = 2;
  if ($(window).width() < 768) {
    lupinsize = 6;
  }
  $('#mv .lupin img').each(function() {
    $(this).css({
      width: 'auto'
    });
    return $(this).width($(this).width() / lupinsize);
  });
  $('#entry .lupin img').each(function() {
    $(this).css({
      width: 'auto'
    });
    return $(this).width($(this).width() / lupinsize);
  });
  $('#resizer').addClass('on');
  clearTimeout(resize);
  return resize = setTimeout(function() {
    return $('#resizer').removeClass('on');
  }, 1000);
});
