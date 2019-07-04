$('#blog ul li h3').each(function() {
  let targetDiv = $('<div>Show Complete Blog</div>');
  targetDiv.data('ref', $(this));
  $(this).prepend(targetDiv);
  targetDiv.click(function(e) {
    e.stopPropagation();
    let url = targetDiv.data('ref').find('a').attr('href');
    url = url.split('#').join(' #');
    targetDiv.load(`data/${url}`);
  });
});