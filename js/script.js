
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