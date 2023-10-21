
//ハンバーガーメニュー//

$(".openbtn").click(function () {
	$(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
    $(".circle-bg").toggleClass('circleactive');
});

$("#g-nav a").click(function () {
    $(".openbtn").removeClass('active');
    $("#g-nav").removeClass('panelactive');
    $(".circle-bg").removeClass('circleactive');
});



//loadingアニメーション
$(window).on('load',function(){

    $("#loading").delay(3000).fadeOut('slow',function(){
      $('body').addClass('appear'); //フェードアウト後bodyにappearクラス付与
    });
  });




/*Inview js*/
$(function(){
  $(".inview_re").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    } else {
      $(this).stop().removeClass("is-show");
    }
  });
});




function sclollAnime1(){

  $('.rotate_animation').each(function(){ 
    var elemPos = $(this).offset().top+90;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).find('.rotate_anime1').addClass('active');
    $(this).find('.rotate_anime2').addClass('active');
    }else{
    $(this).find('.rotate_anime1').removeClass('active');
    $(this).find('.rotate_anime2').removeClass('active');
    }
    });
}

  $(window).scroll(function (){
    sclollAnime1();
  });




//スクロールすると上部に固定
function FixedAnime() {
　　　　var headerH = $('.header_menu').outerHeight(true);
　　　　var scroll = $(window).scrollTop();
　　　　if (scroll >= headerH +30){
　　　　$('.header_menu').addClass('fixed');
　　　　}else{
　　　　$('.header_menu').removeClass('fixed');
　　　　}
}

$(window).scroll(function () {
FixedAnime();
});



//news スライダー
$('.slider').slick({
  mobileFirst: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 6900,
  infinite: true,
  pauseOnHover: false,
  pauseOnFocus: false,
  cssEase: 'linear',
  slidesToShow: 3.5,
  slidesToScroll: 1,
  responsive: [ 
    {
      breakpoint: 1040,
      settings: 'unslick'
    },
    {
      breakpoint:830,
      settings:{
        slidesToShow:3,
      }
    },
    {
      breakpoint:700,
      settings:{
        slidesToShow:2.5,
      }
    },
    {
      breakpoint:500,
      settings:{
        slidesToShow:2,
      }
    },
    {
      breakpoint:300,
      settings:{
        slidesToShow:1.5,
      }
    }
  ]
  });

//リサイズした時に実行
$(window).on('resize orientationchange', function() {
    $('.slider').slick('resize');
});
