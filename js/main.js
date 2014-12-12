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


    /* XrayHTML
       ========================================================================== */
    if($("[data-xrayhtml]").length){
      //Prism
      $("[data-xrayhtml]").find( "code" ).addClass( "language-markup" );
      Prism.highlightAll();
    }


  });

})(jQuery, window, document);