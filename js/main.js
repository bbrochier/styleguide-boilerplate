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


    /* Markdown viewer
       ========================================================================== */
    var converter = new Showdown.converter(),
        jqxhr,
        sMdFile,
        $mdViewer;

    $(".md-viewer").each(function(){
      $mdViewer = $(this);
      sMdFile = $mdViewer.data('file');
      console.log('in');
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