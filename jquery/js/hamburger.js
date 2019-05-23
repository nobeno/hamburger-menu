$(function(){

	//ボタンサイズ
	$('#js-click-btn').on('click',function(){
		$(this).addClass('large-btn');
	});

	// ボタンマウスオーバーで半透明に
	$('#js-hover-btn').mouseover(function(){
		$(this).addClass('opacity');
	}).mouseleave(function(){
		$(this).removeClass('opacity');
	});

	//要素の表示切り替え
	$('#js-show-btn').on('click',function(){
		$('#js-target-element').fadeIn(1000);
	});

	$('#js-hide-btn').on('click',function(){
		$('#js-target-element').fadeOut(1000);
	});

	// 要素の追加
	$('#js-add-btn').on('click',function(){
		$(this).before('<li class="btn">ボタンの前に追加</li>')
		$(this).after('<li class="btn">ボタンの後に追加</li>')
	});

	$('#js-add-btn2').on('click',function(){
		$(this).prepend('<li>前</li>')
		$(this).append('<li>後</li>')
	});

	// toggleメニュー
	$('.js-toggle').on('click',function(){
		$(this).toggleClass('on');
		$(this).siblings().slideToggle();
	});

	// ハンバーガーメニュー
	$('.js-hamburger').on('click',function(){
		$(this).toggleClass('on');
	});

	$('.js-hamburger').on('click',function(){
		$('.').fadeIn('slow');
	});


	//Topに戻る
	$('.js-scroll').on('click',function(){
		$('body,html').animate({scrollTop:0},500);
		//scrollTop:0 はスクロールが戻る位置
		//ex) 100にすると100pxぐらいのとこに行く
	});

	//モーダル開く
	$('.js-modal').on('click',function(){
		$('.modal-content').fadeIn('slow');
		$('#modal-bg').fadeIn('slow');
	});

	$('.js-modal-close').on('click',function(){
		$('.modal-content').fadeOut('1000');
		$('#modal-bg').fadeOut('1000');
	});

	//タブメニュー
	$('.tab-nav a').on('click',function(){
		if($(this).hasClass('active')){
			return false;
		}

		$('.tab-nav a').removeClass('active');
		$(this).addClass('active');

		$('.tab-content > div').removeClass('active');
		$('.tab-content > div').filter(this.hash).addClass('active');
		// ＞　：　直下のdivを
		
	});


});

$(function() {
　$('.Toggle').click(function() {
　　$(this).toggleClass('active');

　if ($(this).hasClass('active')) {
　　$('.NavMenu').addClass('active');　 //クラスを付与
　} else {
　　$('.NavMenu').removeClass('active'); //クラスを外す
　}
　});
});


//ふわっと変わるスライド
// $('.slider').slick({
//   dots: true,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear'
// });

$('#slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '#thumbnail_slider'
});

$('#thumbnail_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '#slider',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});












