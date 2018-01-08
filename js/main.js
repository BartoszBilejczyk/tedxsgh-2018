$(window).ready(function() {
  // go to each section after href click

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

    $('html, body').animate({
      'scrollTop': $target.offset().top - 110
    }, 600);
  });

  // navigation scroll behavior
  var nav = $('.navigation'),
    navContent = $('.navigation-content'),
    navMobile = $('.navigation--mobile'),
    winHeight = $(window).height();

  // fade navbar
  $(function () {
    $(window).scroll(function () {
      // set distance user needs to scroll before we start fadeIn
      if ($(this).scrollTop() < 40) {
        nav.fadeIn();
        navMobile.fadeIn();
      } else {
        nav.fadeOut();
        navMobile.fadeOut();
      }
    });
  });

  // modal
  var modalActivator = $('.modal-activator');
  var modalClose = $('.close');
  var modalContainer = $('#modal-container');
  var modalActiveClass = 'modal-active';

  function closeVideoModal() {
    modalContainer.removeAttr('class').addClass('out');
    $('body, html').removeClass(modalActiveClass).css('overflow-y','scroll');
  }

  function openVideoModal() {
    $('body, html').css('overflow','hidden');
  }

  modalActivator.click(function() {
    openVideoModal();
    modalContainer.removeAttr('class').addClass('active');
    $('body, html').addClass(modalActiveClass);
  })

  modalClose.click(function(){
    closeVideoModal();
  })

  document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27) {
      closeVideoModal();
    }
  });

  $('#consent').on('click', function() {
    if ($(this).is(":checked")) {
      $('.address-details').css('filter', 'none');
      $('.go-to-cryptopia-btn').attr("disabled", false);
    } else {
      $('.address-details').css('filter', 'blur(2px)');
      $('.go-to-cryptopia-btn').attr("disabled", true);
    }
  });
});
