'use strict'

window.addEventListener('load', function () {

  function startAnimatio(el) {
    $(el).addClass('start-animation');
  }
  setTimeout(function () {
    startAnimatio('.chart-percent');
    startAnimatio('.chart-smile');
  }, 400)


  // Tab 
  function hide() {
    $('.list').each(function () {
      $(this).addClass('hide').removeClass('show');
      $(this).css('display', 'none');
    });
    $('.dashboard__header-panel-button').each(function () {
      $(this).removeClass('button--current');
    });
  }

  function show(i = 0) {
    $('.dashboard__header-panel-button').eq(i).addClass('button--current');
    $('.list').eq(i).css('display', 'grid');
    setTimeout(function () {
      $('.list').eq(i).addClass('show').removeClass('hide');
    }, 400)
  }

  hide();
  show();

  $('.dashboard__header-panel-button').each(function (indexButton, btn) {
    $(btn).on('click', function () {
      hide();
      show(indexButton);
    });
  });


  if($(window).width() <= 991){
    $('.item-top__tooltip').each(function(){
      $(this).on('click', function(){
        $(this).addClass('open');
        $('#overlay').addClass('show');
        $('body').addClass('no-scroll');
      });
    });

    $('#overlay').on('click', function(){
      $(this).removeClass('show');
      $('.item-top__tooltip').removeClass('open');
      $('body').removeClass('no-scroll');
    });
  }

});

