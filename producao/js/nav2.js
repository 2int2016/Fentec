$("a#toggle").on('click', function(e) {
$('body').toggleClass('js-open');
$('#nav-background').toggleClass('js-open');
    e.preventDefault();
});

$(".nav-background").on('click', function() {
  $('body, nav').removeClass('js-open');
});

