$(function (){

  const mainHeader = $('#main-header');
  // Função de throttle para limitar a frequência de execução
  function throttle(func, limit) {
    var inThrottle;
    return function() {
      var args = arguments,
        context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(function() {
          inThrottle = false;
        }, limit);
      }
    };
  }

  // Função para verificar a posição de rolagem e aplicar a classe

  function checkScroll() {
    var scroll = $(window).scrollTop();
    if (scroll > 219) {
      mainHeader.addClass("sticky");
    } else {
      mainHeader.removeClass("sticky");
    }
  }

  // Executar a função de verificação de rolagem usando throttle
  $(window).scroll(throttle(checkScroll, 10));

  $('#mobile-menu-opener, .main-header__nav li a').click(function () {
    mainHeader.toggleClass('opened');
  });

  checkScroll();

});
