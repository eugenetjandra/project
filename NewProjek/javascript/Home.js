const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click',function(){
  nav.classList.toggle('slide');
});

$(document).ready(function(){
  $('.nextBtn').on('click', function(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();

    if(nextImg.length){
      currentImg.removeClass('active').css('z-index', -1);
      nextImg.addClass('active').css('z-index', 1);
    }
  });

  $('.prevBtn').on('click', function(){
    var currentImg = $('.active');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('active').css('z-index', -1);
      prevImg.addClass('active').css('z-index', 1);
    }
  });
});
