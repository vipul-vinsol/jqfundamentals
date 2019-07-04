let blogHeadings = $('#blog h3');

// Solution
blogHeadings.click(function(e) {
  e.preventDefault();
  $('#blog').find('.reading').removeClass('reading').slideUp();
  $(this).siblings('p').addClass('reading').slideDown();
});
