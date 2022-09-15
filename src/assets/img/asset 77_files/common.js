$(function () {
  $("nav.global_nav").parents().css("overflow", "visible")
});

$(function () {
  var $body = $('body');
  var $nav = $('.side-menu');
  $('#js__sideMenuBtn').on('click', function () {
    $body.toggleClass('side-open');
    $nav.toggleClass('nav-open');
    $(this).addClass('close_btn');
    $('#js__overlay').on('click', function () {
      $body.removeClass('side-open');
      $nav.removeClass('nav-open');
      $('#js__sideMenuBtn').removeClass('close_btn');
    });
  });
});

/* アコーディオン */
jQuery(function ($) {
  //質問をクリック
  $(".nav_menu_slide_title").click(function () {
    $(this).toggleClass("open");
    //thisにopenクラスを付与
    $(this).next().slideToggle(300);
    //thisのanswerを展開、開いていれば閉じる
  });
});

/* scroll more 回転 */
$(function () {
  var rotate = function (logo, angle) {
    logo.css({
      "transform": "rotate(" + angle + "deg)"
    });
  }
  $(window).scroll(function () {
    rotate($(".scroll_more img"), $(window).scrollTop() * .6);
  })
});


/* スクロールイベント */
$(window).on('scroll', function () {
  winScrollTop = $(this).scrollTop();

  if(winScrollTop > 20) {
    $('.fixed_pick_up_block').addClass('fixed_pick_up_block__hidden');
    $('header').addClass('scroll_header');
  } else {
    $('.fixed_pick_up_block').removeClass('fixed_pick_up_block__hidden');
    $('header').removeClass('scroll_header');
  }
});



/* スクロールしたらヘッダー固定 */
/*
var startPos = 0, winScrollTop = 1;
$(window).on('scroll', function () {
  winScrollTop = $(this).scrollTop();

  var head_top_height = $('.head_top').height();

  if (winScrollTop == 0) {
    $('header').removeClass('fixed_down');
    $('header').removeClass('fixed_up');
    $('.head_bottom_area').removeClass('head_bottom_area__down').removeClass('head_bottom_area__up');
    $('.head_bottom_area').removeClass('head_bottom_area__up');
    $('.head_bottom_area__companies').removeClass('head_bottom_area__companies__down');
    $('.head_bottom_area__companies').removeClass('head_bottom_area__companies__up');

  } else if (winScrollTop >= startPos) {

    if (winScrollTop >= head_top_height) {
      $('header').addClass('fixed_down');
      $('header').removeClass('fixed_up');
      $('.head_bottom_area').addClass('head_bottom_area__down');
      $('.head_bottom_area').removeClass('head_bottom_area__up');
      $('.head_bottom_area__companies').addClass('head_bottom_area__companies__down');
      $('.head_bottom_area__companies').removeClass('head_bottom_area__companies__up');
    }

  } else {

    $('header').removeClass('fixed_down');
    $('header').addClass('fixed_up');
    $('.head_bottom_area').removeClass('head_bottom_area__down');
    $('.head_bottom_area').addClass('head_bottom_area__up');
    $('.head_bottom_area__companies').removeClass('head_bottom_area__companies__down');
    $('.head_bottom_area__companies').addClass('head_bottom_area__companies__up');
  }
  startPos = winScrollTop;
});
*/

$(document).ready(function () {
  $('#featured_slider').slick({ //{}を入れる
    autoplay: false, //「オプション名: 値」の形式で書く
    dots: false, //複数書く場合は「,」でつなぐ
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    infinite: false,
    draggable: true,
    swipe: true,
    speed: 550,
  });
});

$(document).ready(function () {
  $('#featured_slider__bottom').slick({ //{}を入れる
    autoplay: false, //「オプション名: 値」の形式で書く
    dots: false, //複数書く場合は「,」でつなぐ
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    infinite: false,
    draggable: true,
    swipe: true,
    speed: 550,
  });
});

//about スライダー
$(document).ready(function () {
  $('#about_slider').slick({ //{}を入れる
    autoplay: false, //「オプション名: 値」の形式で書く
    dots: false, //複数書く場合は「,」でつなぐ
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    infinite: false,
    draggable: true,
    swipe: true,
    speed: 550,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
});

/* コミュニティスライダー */
$(document).ready(function () {
  $('#community_slide').slick({ //{}を入れる
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    speed: 6000,
    //slidesToShow: 7,
    slidesToScroll: 1,
    pauseOnHover: false,
    infinite: true,
  });
});
$(document).ready(function () {
  $('#community_slide02').slick({ //{}を入れる
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    speed: 6000,
    //slidesToShow: 7,
    slidesToScroll: 1,
    pauseOnHover: false,
    infinite: true,
    rtl: true,
  });
});
$(document).ready(function () {
  $('#community_slide03').slick({ //{}を入れる
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    speed: 6000,
    //slidesToShow: 7,
    slidesToScroll: 1,
    pauseOnHover: false,
    infinite: true,
  });
});
$(document).ready(function () {
  $('#community_slide04').slick({ //{}を入れる
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    speed: 6000,
    //slidesToShow: 7,
    slidesToScroll: 1,
    pauseOnHover: false,
    infinite: true,
    rtl: true,
  });
});
$(document).ready(function () {
  $('#community_slide05').slick({ //{}を入れる
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    speed: 6000,
    //slidesToShow: 7,
    slidesToScroll: 1,
    pauseOnHover: false,
    infinite: true,
  });
});

//pick up スライダー
$(document).ready(function () {
  $('#pick_up_slider').slick({ //{}を入れる
    autoplay: false, //「オプション名: 値」の形式で書く
    dots: false, //複数書く場合は「,」でつなぐ
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    infinite: false,
    draggable: true,
    swipe: true,
    speed: 550,
  });
});

//pick up スライダー
$(document).ready(function () {
  $('#pick_up_slider__video').slick({ //{}を入れる
    autoplay: false, //「オプション名: 値」の形式で書く
    dots: false, //複数書く場合は「,」でつなぐ
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    infinite: false,
    draggable: true,
    swipe: true,
    speed: 550,
  });
});

//latest スライダー
$(document).ready(function () {
  $('.latest_slider').slick({ //{}を入れる
    autoplay: false, //「オプション名: 値」の形式で書く
    dots: false, //複数書く場合は「,」でつなぐ
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    infinite: false,
    draggable: true,
    swipe: true,
    speed: 550,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
});

//記事上部 タームスライダー
/*
$(document).ready(function () {
  $('.term_list__slier').slick({ //{}を入れる
    autoplay: false, //「オプション名: 値」の形式で書く
    dots: false, //複数書く場合は「,」でつなぐ
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    infinite: false,
    draggable: false,
    swipe: true,
    speed: 550,
  });
});
*/


//記事内 ギャラリースライド
$(document).ready(function () {
  $('ul.blocks-gallery-grid').slick({ //{}を入れる
    autoplay: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    infinite: true,
    draggable: false,
    swipe: true,
    speed: 550,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          arrows: false,
        }
      },
    ]
  });
});

//検索結果ページ 投稿タイプカテゴリー
$(document).ready(function () {
  $('.tab_container__slider').slick({ //{}を入れる
    autoplay: false, //「オプション名: 値」の形式で書く
    dots: false, //複数書く場合は「,」でつなぐ
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    infinite: false,
    draggable: false,
    swipe: true,
    speed: 550,
  });
});

/* YouTube モーダル */
$(document).ready(function () {
  $(".js-video-button").modalVideo({
    youtube: {
      controls: 0,
      nocookie: true,
      rel: 0, //関連動画の指定
      autoplay: 1, //自動再生の指定
    }
  });
});

/* マウスカーソル追従 */
$(function ($) {
  $(document).on("mousemove", function (e) {
    $(".stalker_mouse").css({ transform: 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)' });
  });
});

$(function () {
  $('.home_movie_area a')
    // マウスポインターが画像に乗った時の動作
    .mouseover(function (e) {
      var windowWidth = window.innerWidth;
      if (windowWidth >= 768) {
        $('#stalker').addClass("stalker_mouse");
        $('#stalker').fadeIn();
        $('#stalker').css('display', 'block');
      }
    })
    // マウスポインターが画像から外れた時の動作
    .mouseout(function (e) {
      var windowWidth = window.innerWidth;
      if (windowWidth >= 768) {
        $('#stalker').removeClass("stalker_mouse");
        $('#stalker').fadeOut();
        $('#stalker').css('display', 'none');
      }
    });
  $('.embrace_video_area a')
      // マウスポインターが画像に乗った時の動作
      .mouseover(function (e) {
        var windowWidth = window.innerWidth;
        if (windowWidth >= 768) {
          $('#stalker').addClass("stalker_mouse");
          $('#stalker').fadeIn();
          $('#stalker').css('display', 'block');
        }
      })
      // マウスポインターが画像から外れた時の動作
      .mouseout(function (e) {
        var windowWidth = window.innerWidth;
        if (windowWidth >= 768) {
          $('#stalker').removeClass("stalker_mouse");
          $('#stalker').fadeOut();
          $('#stalker').css('display', 'none');
        }
      });

  $('.about_video_area a')
  // マウスポインターが画像に乗った時の動作
  .mouseover(function (e) {
    var windowWidth = window.innerWidth;
    if (windowWidth >= 768) {
      $('#stalker').addClass("stalker_mouse");
      $('#stalker').fadeIn();
      $('#stalker').css('display', 'block');
    }
  })
  // マウスポインターが画像から外れた時の動作
  .mouseout(function (e) {
    var windowWidth = window.innerWidth;
    if (windowWidth >= 768) {
      $('#stalker').removeClass("stalker_mouse");
      $('#stalker').fadeOut();
      $('#stalker').css('display', 'none');
    }
  });

});

/*about スライド*/
$(function() {
  var slide_main = $(".about_slide").slick({
    asNavFor: ".about_slide-navigation",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  });
  var slide_sub = $(".about_slide-navigation").slick({
    asNavFor: ".about_slide",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    /*autoplay: true,*/
    autoplaySpeed: 4000,
    speed: 400,
    focusOnSelect: true,
    arrows: true,
    dots: true,
  });
  var open_window_Width = $(window).width();
  $(window).resize(function() {
    var width = $(window).width();
    if (open_window_Width != width) {
      slide_main.slick();
      slide_sub.slick();
    }
  });
});

/*アロハチャレンジ アコーディオン*/
$(function(){
  $('.toggle_title').click(function(){
    $(this).toggleClass('selected');
    $(this).next().slideToggle();
  });
});

/*
$(function(){
  $('.card_open_item').each(function(){
    $(this).on('click',function(){
      $(this).prev(".card_item_content").slideToggle();
      return false;
    });
  });
});
*/

/*記事詳細　シェアボタン*/
$(window).scroll(function(){
  var element = $('.single_title_area'),
      scroll = $(window).scrollTop(),
      height = element.outerHeight();
  if ( scroll > height + 50 ) {
    $('.share_click_area').addClass('click_area_active');
  } else {
    $('.share_click_area').removeClass('click_area_active');
  }
});

$(function(){
  $('.share_fix__fixed').click(function() {
    if($('.share_fix__fixed').hasClass("active")){
      $('.share_fix__fixed').removeClass("active");
    }else{
      $('.share_fix__fixed').addClass("active");
    }
  })
});
