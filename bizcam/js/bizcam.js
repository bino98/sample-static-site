$(function () {
  //width PC or SP
  var isSpWidth = window.innerWidth < 768;

  //smooth scroll
  (function () {
    var offsetY = isSpWidth ? -40 :-60;
    var time = 500;
    $('a[href^="#"]').click(function() {
      var target = $(this.hash);
      if (!target.length) return ;
      var targetY = target.offset().top+offsetY;
      $('html,body').animate({scrollTop: targetY}, time, 'swing');
      window.history.pushState(null, null, this.hash);
      return false;
    });
  })(isSpWidth);
  

  //メニュー出し分け
  var $header_menu = $('#header_menu'),
    $header_menu_icon = $('#header_menu_icon'),
    $header_menu_overlay = $('#header_menu_overlay'),
    $header_menu_link = $header_menu.find('a')
    ;
  $header_menu_icon.click(function (e) {
    if (!$header_menu.is(':visible')) {
      $header_menu_icon.addClass('clicked');
      $header_menu_overlay.fadeIn('fast');
      $header_menu.slideDown('fast');
    } else {
      $header_menu_icon.removeClass('clicked');
      $header_menu_overlay.fadeOut('fast');
      $header_menu.slideUp();
    }
  });
  $('#header_menu_overlay').click(function (event) {
    var target = event.target ? event.target : event.srcElement;
    if($(target).is('#header_menu_overlay')){
      $header_menu_icon.removeClass('clicked');
      $header_menu_overlay.fadeOut('fast');
      $header_menu.slideUp();
    }
  });
  $header_menu_link.click(function (e) {
    $header_menu_icon.removeClass('clicked');
    $header_menu_overlay.fadeOut('fast');
    $header_menu.slideUp();
  });

  var $modal_gallery_1 = $('#modal_gallery_1')
    , $modal_gallery_2 = $('#modal_gallery_2')
    , $modal_gallery_1_inner = $('#modal_gallery_1_inner')
    , $modal_gallery_2_inner = $('#modal_gallery_2_inner')
    ;

  //slider
  var slick_modal_mentor_inner = $('#modal_mentor_inner').slick({
    dots: true
  });
  if(!isSpWidth){
    var slick_modal_gallery_1 = $modal_gallery_1_inner.slick({
      dots: true,
      arrows: true
    })
      , slick_modal_gallery_2 = $modal_gallery_2_inner.slick({
      dots: true,
      arrows: true
    });
  }

  if(isSpWidth){
    $('#program_3days_wrap').slick({
      dots: true,
      arrows: false
    });
  }



  //modal出し分け
  var $modals = $('.modal'),
    $modalOpenButton = $('.modalOpen'),
    $modalClose = $('.modalClose');
  $modalOpenButton.click(function (e) {
    if($(this).attr('data-target')){
      $($(this).attr('data-target')).fadeIn('fast');
      if($(this).hasClass('modalOpenWork')){
        $modal_gallery_1.show();
        $modal_gallery_2.hide();
        $modal_gallery_1.find('.modal_gallery_slide').eq(0).focus();
        if(!isSpWidth){ slickResize(slick_modal_gallery_1); }
      } else if($(this).hasClass('modalOpenOffice')){
        $modal_gallery_1.hide();
        $modal_gallery_2.show();
        $modal_gallery_2.find('.modal_gallery_slide').eq(0).focus();
        if(!isSpWidth){ slickResize(slick_modal_gallery_2); }
      }

      if($(this).attr('data-tarmentor')){
        slickResize(slick_modal_mentor_inner);
        slick_modal_mentor_inner.slick('slickGoTo', $(this).attr('data-tarmentor'));
        $('#modal_mentor_inner .modal_mentor_slide').eq(0).focus();
      }
    }
  });

  var slickResize = function(slickObject) {
    slickObject.css('opacity',0);
    slickObject.animate({'z-index':1},200,function(){
      slickObject.slick('setPosition');
      slickObject.animate({'opacity':1});
    });
  }

  //modalを中央揃え
  $(window).resize(modalVACenter());
  function modalVACenter() {
    var $modal_mentor = $('#modal_mentor');
    var h = $(window).height();
    var ch = $modal_mentor.outerHeight();
    console.log(h,ch);
    $modal_mentor.css({
      "margin-top": ((h - ch)/2) + "px"
    });
  }
  modalVACenter();

  //modalをEscキーで非表示
  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $modalClose.eq(0).click();
    }
    // if (e.keyCode == 37 || e.KeyCode == 39) {
    //   $('.slick-slide:visible').eq(0).focus();
    //   $(document).trigger(
    //     $.Event( 'keydown', { keyCode: e.keyCode, which: e.keyCode } )
    //   );
    // }
  });

  //mentorリンクによって出し分け



  //切替
  $('.modal_gallery_button').click(function (e) {
    console.log($(this).is('#modal_gallery_button_report'));
    if($(this).is('#modal_gallery_button_report') || $(this).is('#modal_gallery_button_report_2')){
      $modal_gallery_1.fadeIn('fast');
      $modal_gallery_2.fadeOut('fast');
      if(!isSpWidth){ slickResize(slick_modal_gallery_1); }
    } else if($(this).is('#modal_gallery_button_office') || $(this).is('#modal_gallery_button_office_2')){
      $modal_gallery_1.fadeOut('fast');
      $modal_gallery_2.fadeIn('fast');
      if(!isSpWidth){ slickResize(slick_modal_gallery_2); }
    }
  });

  $modalClose.click(function (event) {
    var target = event.target ? event.target : event.srcElement;
    if($(target).hasClass('modalClose')){
      $modals.fadeOut();
    }
  });
  
  
  //fade in/out
  if(!isSpWidth){
    (function () {
      var $fadeElements = $(".fade, .container h2_, .container p, .container h3,.days_container, .mentorbox, .gallery_title, #infomation_box, #section_information_entry, #section_information_footer");
      $(window).scroll(function() {
        $fadeElements.each(function() {
          /* Check the location of each desired element */
          var objectBottom = $(this).offset().top + ($(this).outerHeight()/2);
          //var objectTop = $(this).offset().top;
          var windowBottom = $(window).scrollTop() + $(window).innerHeight();
          //var scrollTop = $(window).scrollTop();
          /* If the element is completely within bounds of the window, fade it in */
          if (objectBottom < windowBottom) { //object comes into view (scrolling down)
            $(this).fadeTo(800,1);
          }
        });
      });
      $fadeElements.css('opacity', 0);
      $(window).scroll(); //invoke scroll-handler on page-load
    })();
  }

});


