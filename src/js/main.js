$('.parallax-window').parallax({imageSrc: 'src/img/background.jpg'});
$('.parallax-window2').parallax({imageSrc: 'src/img/background2.jpg'});
$('.parallax-window3').parallax({imageSrc: 'src/img/background3.jpg'});
$('.parallax-window4').parallax({imageSrc: 'src/img/background4.jpg'});

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

              $.getJSON( "src/data/programs.json", function( data ) {
                var items = [];
                $.each( data, function( key, val ) {
                  items.push( "<li>" + val + "</li>" );
                });
                $( "<ul/>", {
                  "class": "my-new-list",
                  html: items.join( "" )
                }).appendTo( ".panel-body1" );
              });

              $.getJSON( "src/data/programs2.json", function( data ) {
                var items = [];
                $.each( data, function( key, val ) {
                  items.push( "<li>" + val + "</li>" );
                });
                $( "<ul/>", {
                  "class": "my-new-list",
                  html: items.join( "" )
                }).appendTo( ".panel-body2" );
              });

$(".panel-head").click(function(){
    $(".panel-body1").toggle(400, function(){
        $(window).trigger('resize').trigger('scroll');
    });
});

$(".panel-head2").click(function(){
    $(".panel-body2").toggle(400, function(){
        $(window).trigger('resize').trigger('scroll');
    });
});

$('#collapseOne, #collapseTwo, #collapseThree').on('hidden.bs.collapse', function () {
  $(window).trigger('resize').trigger('scroll');
})

$('#collapseOne, #collapseTwo, #collapseThree').on('shown.bs.collapse', function () {
  $(window).trigger('resize').trigger('scroll');
})

$(".icon-facebook").hover(function(){
  $(this).css("background-position", "0 -96px");
}, function() {
  $(this).css("background-position", "0 -64px");
});
