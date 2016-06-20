$('.parallax-window').parallax({imageSrc: 'img/background.jpg'});
$('.parallax-window2').parallax({imageSrc: 'img/background2.jpg'});
$('.parallax-window3').parallax({imageSrc: 'img/background3.jpg'});

$('body').scrollspy({ target: '#navbar', offset: 51 });

 $('#navbar').scrollToFixed({
      });

      /* smooth scrolling for scroll to top */
      $('.navbar-brand').click(function(e){
                 e.preventDefault();
               $('body,html').animate({scrollTop:0},1000);
             });

               /*smooth scrolling for nav sections */
              $('#navbar li>a').click(function(e){
                  $('#nav li>a').removeClass('active');
                  var link = $(this).attr('href');
                  var posi = $(link).offset().top-50;
                  $('body,html').stop().animate({scrollTop:posi},700);
                  return false;
              });

              $.getJSON( "data/programs.json", function( data ) {
                var items = [];
                $.each( data, function( key, val ) {
                  items.push( "<li>" + val + "</li>" );
                });

                $( "<ul/>", {
                  "class": "my-new-list",
                  html: items.join( "" )
                }).appendTo( ".panel-body1" );
              });

$(".panel-head").click(function(){
    $(".panel-body1").toggle(600, function(){
        $(window).trigger('resize').trigger('scroll');
    });
});
