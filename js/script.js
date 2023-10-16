
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
    var elemPos = $(this).offset().top-50;
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




  var beforePos = 0;
  
  function ScrollAnime() {
      var elemTop = $('#firstview').offset().top;
    var scroll = $(window).scrollTop();
      if(scroll == beforePos) {
      }else if(elemTop > scroll || 0 > scroll - beforePos){
      //ヘッダーが上から出現する
      $('#header').removeClass('UpMove');
      $('#header').addClass('DownMove');
      }else {
      //ヘッダーが上に消える
          $('#header').removeClass('DownMove');
      $('#header').addClass('UpMove');
      }
      
      beforePos = scroll;//現在のスクロール値を比較用のbeforePosに格納
  }
  
  $(window).scroll(function () {
    ScrollAnime();
  });
