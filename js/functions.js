$(function(){
  fixHeader();
  changeHamburger();
  initRaty('.review__raty');
  drawSlider();
  scrollButtons();
  }
);

function fixHeader() {
  let header = $('.header'), //хедер
      headerHeight = header.innerHeight(), // высота хедера
      content = $('.welcome-section'); //контентная часть

  $(window).scroll(function() { //событие скролла страницы
    let windowScroll = $(this).scrollTop(); //скроллим от верха страницы
    if (windowScroll >= headerHeight) { //условие в котором смотрим просклорили страницу на высоту хедера или нет, если да:
      header.addClass('header_fixed'); //довешиваем класс на хедер
      content.css({ //довешиваем отступ на контент
        'margin-top': headerHeight
      })
    } 
    else { //в противном случае все удаляем
      header.removeClass('header_fixed');
      content.css({
        'margin-top': '0'
      })
    }
  })
};

function changeHamburger() {
    $('.btn_menu').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('btn_menu_active');
      $('.header-nav-list').toggleClass('header-nav-list_active');
    })
};

function scrollButtons() {
  'use strict;';
  let window = $('body,html'),
      headerHeight = $('.header').innerHeight();
      // aboutHolder = $('.about').offset().top,
      // workHolder = $('.works').offset().top;

  $('.logo').on('click', function (event) {
    event.preventDefault();
    window.animate(       {
        scrollTop: window.offset().top
      }, 600
    );
  });

  $(".header-nav-list").on("click","a", function (event) {
    event.preventDefault();
    let navId = $(this).attr('href'),
        blockTop = $(navId).offset().top;            
    window.animate({scrollTop: blockTop - headerHeight}, 600);
  });
}; 


function initRaty(starClass) {
  'use strict';
  $(starClass).raty({
    score: 5,
    starOff: 'images/star-off.png',
    starOn: 'images/star-on.png',
  });
}


function drawSlider() {
  $('.review-list').slick({
      
      slidesToShow: 2,
      infinite: true,
      dots: true,
      slidesToScroll: 1,
      slide: 'li',
      arrows: true,
      prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });
};

