$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
  $(window).scroll(function () {
        var wHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.move-content').each(function () {
            var position = $(this).offset().top;
            if(scroll > position - wHight + 100) {
                $(this).addClass('fadein');
            }
        });
    });
    $('.entry-area').hover(
      function(){
        $(this).find('img').attr('src','images/tcs_lp_entry-bt02-on.png');
      },
      function(){
        $(this).find('img').attr('src','images/tcs_lp_entry-bt02.png');
      }
    );
    $('.header-entry-btn').hover(
      function(){
        $(this).find('img').attr('src','images/tcs_lp_entry-bt01-on.png');
      },
      function(){
        $(this).find('img').attr('src','images/tcs_lp_entry-bt01.png');
      }
    );
  if (window.matchMedia( '(min-width: 750px)' ).matches) {
    $('.mainVisual').find('img').attr('src','images/tcs_lp_mainVisual.jpg');
    $('.CatchCopy').find('img').attr('src','images/tcs_lp_CatchCopy.png');
    $('.Excellent').find('img').attr('src','images/tcs_lp_content04.jpg');
    $('.last-image').find('img').attr('src','images/tcs_lp_last-image.png');
    $('.flow-list').removeClass('flex-area');
  }
  else{
    $('.mainVisual').find('img').attr('src','images/tcs_lp_mainVisual-sp.jpg');
    $('.CatchCopy').find('img').attr('src','images/tcs_lp_CatchCopy-sp.png');
    $('.Excellent').find('img').attr('src','images/tcs_lp_content04-sp.jpg');
    $('.last-image').find('img').attr('src','images/tcs_lp_last-image-sp.png');
    $('.flow-list').addClass('flex-area');
    $('.question').click(function(){
      var answer = $(this).next('.answer');
      if(answer.is(':visible')){
        answer.hide();
        $(this).removeClass('active');
    }
      else{
        answer.show();
        $(this).addClass('active');
      }
    })
  };

});
