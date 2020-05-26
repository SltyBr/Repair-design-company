/* document.addEventListener("DOMContentLoaded", function(event) { 
   const modal = document.querySelector('.modal');
   const modalButton = document.querySelectorAll('[data-toggle = modal]');
   const closeBtn = document.querySelector('.modal__close');
   const switchModal = () => {
    modal.classList.toggle('modal--visible');
   }

   //adding modal--visible for click
  modalButton.forEach (element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.classList.remove('modal--visible');
  }
  });

  window.onkeydown = function( event ) {
    if ( event.keyCode == 27 ) {
      modal.classList.remove('modal--visible');
    }
};

}); */

// 
 $(document).ready(function () {
   var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close');
  
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  $(this).keydown(function(eventObject){
    if (eventObject.which == 27)
      modal.removeClass('modal--visible');
  });

  $(document).mouseup(function (e) {
    if (modal.has(e.target).length === 0){
        modal.removeClass('modal--visible');
    }
  });

 });

 $(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('#scroll_top').show();  
		} else {
			$('#scroll_top').hide();
		}
	});
 
	$('#scroll_top').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
  });
  
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 25 + bullets.width() + 25);
  bullets.css('left', prev.width() + 25)
});