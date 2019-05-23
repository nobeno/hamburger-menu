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

		//スライダー
	var slideWidth = $('.slide').outerWidth();
	var slideNum = $('.slide').length;
	var slideWrapperWidth = slideWidth * slideNum;
	var currentSlide = 0;
	$('.slide-wrapper').css('width',slideWrapperWidth);

	$('.next-slider').on('click',function(){
		if(currentSlide >= slideNum - 1){
			return false;
		}
		 currentSlide++;
		 slide();
	});

	$('.prev-slider').on('click',function(){
		if(currentSlide <= 0){
			return false;
		}
		currentSlide--;
		slide();
	});

	function slide(){
		$('.slide-wrapper').stop().animate({
			left:currentSlide * -slideWidth
		});
	}

});
















