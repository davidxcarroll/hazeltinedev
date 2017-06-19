$('.project').slick({
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