
// SLICK PROJECTS
// ==================================================

$('.project').slick({
  centerMode: true,
  centerPadding: '0',
  dots: true,
  infinite: false,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
});

// SLICK TESTIMONIALS
// ==================================================

$('.testimonials-list').slick({
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
});

// ABOUT ACCORDIONS
// ==================================================

$('#about-timeline-button').click(function(){
  $('.about-timeline').slideToggle(300);
  if($('#about-timeline-button .emoji').hasClass('emoji-arrow-down')){
   $('#about-timeline-button .emoji').removeClass('emoji-arrow-down').addClass('emoji-arrow-up');
  } else if($('#about-timeline-button .emoji').hasClass('emoji-arrow-up')){
   $('#about-timeline-button .emoji').removeClass('emoji-arrow-up').addClass('emoji-arrow-down');
  }
});

$('#about-services-button').click(function(){
  $('.about-services').slideToggle(300);
  if($('#about-services-button .emoji').hasClass('emoji-arrow-down')){
   $('#about-services-button .emoji').removeClass('emoji-arrow-down').addClass('emoji-arrow-up');
  } else if($('#about-services-button .emoji').hasClass('emoji-arrow-up')){
   $('#about-services-button .emoji').removeClass('emoji-arrow-up').addClass('emoji-arrow-down');
  }
});

// JRIBBBLE
// ==================================================

$.jribbble.setToken('d2147d39726f9d071678fb12d2a5a10b92737c89e9d12f88ced7e8d074d06aa6');

$.jribbble.users('davidxcarroll').shots({per_page: 4}).then(function(shots) {
  var html = [];
  
  shots.forEach(function(shot) {
    html.push('<li class="shot">');
    html.push('<a href="' + shot.html_url + '" target="_blank">');
    html.push('<img src="' + shot.images.hidpi + '">');
    html.push('</a></li>');
  });
  
  $('.shots').html(html.join(''));
});

// GOOGLE ANALYTICS
// ==================================================

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-101431937-1', 'auto');
ga('send', 'pageview');
