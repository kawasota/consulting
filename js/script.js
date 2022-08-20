// メニューをクリックした際の変化
$('.top-header-nav-btn-js').on('click', function () {

  $('.top-header-menu-list, .top-header-menu, .top-header-nav-btn-line').toggleClass('open');
  $('.top-header-mail').toggleClass('none');

  let scroll = $(window).scrollTop();

  if (scroll > 1) {
    $('.top-header-nav-btn-line').css('background-color', '#fff');

    if (!$('.top-header-nav-btn-line').hasClass('open')) {
      $('.top-header-nav-btn-line').css('background-color', '#000');
    }
  } else if (scroll == 0) {
    $('.top-header-nav-btn-line').css('background-color', '#fff');

    if (!$('.top-header-nav-btn-line').hasClass('open')) {
      $('.top-header-nav-btn-line').css('background-color', '#707070');
    }
  }
})


// スクロール・クリックした際のメニューボタンの変化
$(window).on('scroll click', function () {

    const scroll = $(window).scrollTop();

    if (scroll > 10) {
      $('.top-header-nav-btn-line').css('background-color', '#000');

      if ($('.top-header-nav-btn-line').hasClass('open')) {
        $('.top-header-nav-btn-line').css('background-color', '#fff');
      }
    } else if (scroll < 10) {
      $('.top-header-nav-btn-line').css('background-color', '#707070');

      if ($('.top-header-nav-btn-line').hasClass('open')) {
        $('.top-header-nav-btn-line').css('background-color', '#fff');
      }
    }

    if (scroll > 3000) {
      $('.top-header-mail').addClass('show');

      if ($('.top-header-mail').hasClass('none')) {
        $('.top-header-mail').css('opacity', '0');
      }
      
      if (!$('.top-header-mail').hasClass('none')) {
          $('.top-header-mail').css('opacity', '1');
      }
    } else {
      if ($('.top-header-mail').hasClass('show')) {
        $('.top-header-mail').css('opacity', '1');

        if ($('.top-header-mail').hasClass('none')) {
          $('.top-header-mail').css('opacity', '0');
        }
      }
    }
})


// フッターやコンタクトまで、スクロールした際のお問い合わせボタンの変化
$(function () {
  
  $(window).on('scroll', function () {

        const doch = $(document).innerHeight(); //ページ全体の高さ
        const winh = $(window).innerHeight(); //ウィンドウの高さ
        const bottom = doch - winh; //ページ全体の高さ - ウィンドウの高さ = ページの最下部位置
        const footer = $('footer').offset().top;
        const contact = $('.contact').offset().top;
        const company = $('.company').offset().top;
        const scroll = $(window).scrollTop();
    
        if (bottom <= scroll ) {
          $(".top-header-mail").addClass('move_top');
        } else if ( bottom >= scroll ) {
          $(".top-header-mail").removeClass('move_top');
        }
    
        if (scroll > footer - winh ) {
          $('.top-header-mail').addClass('color_change');
        } else {
          $('.top-header-mail').removeClass('color_change');
        }
    
        if (scroll > contact - winh) {
          $('.top-header-mail_txt').text("相談はコチラ");
        } else {
          $('.top-header-mail_txt').text("相談してみる");
        }
    
        if (scroll > company - winh) {
          $('.top-header-mail_txt').text("相談してみる");
        }
      })
});


// ページ内リンクをクリックしてスクロール際の挙動
$(function () {
  function ScrollBtn(btn, place) {

    // スクロールさせたい場所までの距離
    const position = $(place).offset().top;

    // 対象のリンクをクリックしたらスクロールする
    $(btn).click(function () {

      const speed = 300;

      $("html").animate({
        scrollTop: position
      }, speed, function () {
        if ($('.top-header-menu-list, .top-header-menu, .top-header-nav-btn-line').hasClass('open') && $('.top-header-mail').hasClass('none')) {
          $('.top-header-menu-list, .top-header-menu, .top-header-nav-btn-line').removeClass('open');
          $('.top-header-nav-btn-line').css('background-color', '#707070')
          $('.top-header-mail').removeClass('none');
        }  
      });
    });
  }

  ScrollBtn('.scroll_a', '.point');
  ScrollBtn('.scroll_b', '.service');
  ScrollBtn('.scroll_c', '.flow');
  ScrollBtn('.scroll_d', '.member');
  ScrollBtn('.scroll_e', '.faq');
  ScrollBtn('.scroll_f', '.contact');
  ScrollBtn('.scroll_g', '.company');
  ScrollBtn('.top-header-mail', '.contact');
  ScrollBtn('.footer-scroll', '.top');
});

