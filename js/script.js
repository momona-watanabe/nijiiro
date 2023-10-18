
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
　　　　var headerH = $('#header').outerHeight(true);
　　　　var scroll = $(window).scrollTop();
　　　　if (scroll >= headerH){
　　　　$('.header_menu').addClass('fixed');
　　　　}else{
　　　　$('.header_menu').removeClass('fixed');
　　　　}
}

$(window).scroll(function () {
FixedAnime();
});
