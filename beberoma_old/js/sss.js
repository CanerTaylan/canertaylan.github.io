// JavaScript Document
    function initMenu() {
  $('.sss ul li div').hide();
  $('.sss ul li div:first').hide();
  $('.sss ul li h3').click(
    function() {
      var checkElement = $(this).next();
      if((checkElement.is('ul li div')) && (checkElement.is(':visible'))) {
        return false;
        }
      if((checkElement.is('ul li div')) && (!checkElement.is(':visible'))) {
        $('.sss ul li div:visible').slideUp('normal');
        checkElement.slideDown('normal');
        return false;
        }
      }
    );
  }
$(document).ready(function() {initMenu();});
