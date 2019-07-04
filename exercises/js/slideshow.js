// 1
$('body').prepend($('#slideshow'));


// Slideshow
$('#slideshow li:gt(0)').hide();

let i = 0;
let items = $('#slideshow li')

setInterval(function() {

  items.eq(i)
  .fadeOut(1000, function() {
    ++i;
    if(i === items.length) i = 0;

    $('#currentImage').text(i+1);
    items.eq(i)
    .fadeIn(1000);
  })
}, 3000);

$('#slideshow').after(`
<h1>Slide Show Details</h1>
<h2> Total Images :- ${items.length} </h2>
<h2> Current Image :- <span id='currentImage'>1</span> </h2>
`);