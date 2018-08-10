$(document).ready ->
    opsize = 2
    opsize = 4 if $(window).width() < 768
    $('#mv').imagesLoaded ->
        $('#opening img, #resizer img').each ->
            $(this).width $(this).width()/opsize
        $('#mv').addClass 'on'
        setTimeout ->
            $('#switch').addClass 'fadedIn'
            $('#pagetop').addClass 'on'
            $('body').css 'overflow': 'auto'
        , 9600
    $('#switch, #menu .close').click ->
        $('#switch').toggleClass 'on'
        $('#menu').toggleClass 'on'
    $('a').click ->
        if !$(this).attr('href') && $('#'+$(this).attr('class')).length > 0
            $('html,body').animate scrollTop: $('#'+$(this).attr('class')).offset().top
            $('#switch, #menu').removeClass 'on'
    $('#pagetop').click ->
        $('html,body').animate scrollTop: 0
    lupinsize = 2
    lupinsize = 6 if $(window).width() < 768
    $('#mv').imagesLoaded ->
        $('#mv .lupin img').each ->
            $(this).width $(this).width()/lupinsize
    $('#entry').imagesLoaded ->
        $('#entry .lupin img').each ->
            $(this).width $(this).width()/lupinsize
    $(window).scroll ->
        if !$('#entry').hasClass('on') && $(window).scrollTop() > ($('#entry').offset().top - ($(window).height() / 1.4))
            $('#entry').addClass 'on'
    $('p span').each (i, elem)->
        $(window).scroll ->
            if !$(elem).hasClass('on') && $(window).scrollTop() > ($(elem).offset().top - ($(window).height() / 1.4))
                $(elem).addClass 'on'

resize = null
lastWidth = $(window).width()
$(window).resize ->
    return if $(window).width() == lastWidth

    lupinsize = 2
    lupinsize = 6 if $(window).width() < 768
    $('#mv .lupin img').each ->
        $(this).css width: 'auto'
        $(this).width $(this).width()/lupinsize
    $('#entry .lupin img').each ->
        $(this).css width: 'auto'
        $(this).width $(this).width()/lupinsize

    $('#resizer').addClass 'on'
    clearTimeout resize
    resize = setTimeout ->
        $('#resizer').removeClass 'on'
    , 1000
