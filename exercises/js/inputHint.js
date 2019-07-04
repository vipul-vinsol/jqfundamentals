let searchInput = $("input[name='q']");
let labelValue = $('#search label').text();

// 1
searchInput
.val(labelValue);

// 2 
searchInput.addClass('hint');

// 3
$('#search label').remove();

// 4
searchInput.focus(function() {
  $(this)
  .removeClass('hint')
  .val('');
});

searchInput.blur(function() {
  $(this)
  .addClass('hint')
  .val(labelValue);
});
