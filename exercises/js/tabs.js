let modules = $('div.module');

// 1 
modules.hide();

// 2
modules
  .first()
  .before('<ul id="tabNavigation"></ul>');

// 3
modules.each(function() {
  let data = $(this).find('h2').text();
  $('#tabNavigation').append(`<li>${data}</li>`);
});

// 4
$('#tabNavigation li').click(function() {
  let id = $(this).addClass('current').text().toLowerCase();
  $(this).siblings().removeClass('current');
  modules.hide();
  $(`#${id}`).show();
});

// 5
modules.first().show();