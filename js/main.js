(function ($, window, document, undefined) {
  'use strict';

  $(function () {

    /* Navigation
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