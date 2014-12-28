(function ($, window, document, undefined) {
  'use strict';

  $(function () {

    /* Set Nav state from localStorage
       ========================================================================== */
    if(localStorage && localStorage.getItem('styleguide-nav-state')){
        var sgnav = localStorage.getItem('styleguide-nav-state');
        if(sgnav == 1){
          $('.sg-body').addClass('nav-is-opened');
        }
    }


    /* Nav show/hide
       ========================================================================== */
    $('.sg-nav-trigger').on('click', function(){
      $('.sg-body').toggleClass('nav-is-opened');
      //set localstorage
      if($('.sg-body').hasClass('nav-is-opened')){
        localStorage.setItem('styleguide-nav-state', 1);
      } else {
        localStorage.setItem('styleguide-nav-state', 0);
      }
    })


    /* Nav accordion
       ========================================================================== */
    $('.sg-nav span').on('click', function(){
      $(this).toggleClass('is-opened').next().slideToggle();
    })


    /* Nav auto Scrolling
       ========================================================================== */
    $('.sg-nav a[href^="#"').on('click', function(e){
      e.preventDefault();
      var scrollOffset = -60,
          target = $(this).attr('href'),
          scrollPosition = $(target).offset().top + scrollOffset;
      document.location.hash = target;
      $('html,body').scrollTop(scrollPosition);
    });




    /* XrayHTML
       ========================================================================== */
    if($("[data-xrayhtml]").length){
      //Prism
      $("[data-xrayhtml]").find( "code" ).addClass( "language-markup" );
      Prism.highlightAll();

      //Show/hide Code
      $('.xrayhtml .snippet').append( "<span class='sg-toggleCode'></span>" );
      $('.sg-toggleCode').on('click', function(){
        $(this).toggleClass('is-opened').parent().next().slideToggle();
      })

      //Copy/past Code
      $('.xrayhtml').each(function() {
        var copy = $( "<a/>", {
            "class" : "sg-copyCode",
            "href" : "#",
            "text" : "Copy"
          }),
          code = $(this).find( "code" ).text(),
          clip = new ZeroClipboard( copy, {
            moviePath: "js/vendor/zeroclipboard/ZeroClipboard.swf",
            text: code
          });

        $(this).find( ".source-panel" ).prepend(copy);
      });

    }


    /* Markdown viewer
       ========================================================================== */
    var converter = new Showdown.converter(),
        jqxhr,
        sMdFile,
        $mdViewer;

    $(".md-viewer").each(function(){
      $mdViewer = $(this);
      sMdFile = $mdViewer.data('file');
      jqxhr =
        $.ajax({
            async: false, //Make ajax requests synchronously = wait for the previous to finish
            url: sMdFile,
            data: 'text'
        })
        .done(function(data){
            var ret = converter.makeHtml(data);
            $mdViewer.html(ret);
        })
      });
    });


})(jQuery, window, document);

    // $.fn.scrollToHash = function(options) {

    //   // Default options
    //   var settings = $.extend({
    //       scrollDuration    : 1000,
    //       element        : null
    //   }, options);

    //   this.click(function() {
    //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //       var target = $(this.hash);
    //       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //       if (target.length) {
    //         $('html,body').animate({
    //           scrollTop: target.offset().top
    //         }, settings.scrollDuration);
    //         return false;
    //       }
    //     }
    //   });

    // };