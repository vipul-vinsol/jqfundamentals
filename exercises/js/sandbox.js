$('div.module') // --> All div's with class module

$('#myList').children().eq(2)
$('#myList > li:nth-child(3)')
$('#myList > li:eq(2)')

/*
* According to me, the sector with nth-child should be fastest as its native selector 
* and will require no preprocessing to convert in some desired form and can be applied
* DIRECTLY
*/

$("label[for='q']")

$(':hidden').length

$('img[alt]').length


$('tr:odd')


/*
* Part Two
*/

$('img').each(() => {
	console.log(this.attr('alt'));
});




$('input.input_text')
.parent()
.addClass('class');




$('#myList > li.current').each(function(){
	let item = $(this);
	item.removeClass('current');
	item.next().addClass('current');
});




$('#specials').find('input[type="submit"]')



$('#slideshow > li:first-child')
.addClass('current')
.siblings()
.addClass('disabled')

/*
* Part Three
*/

for(let i = 0; i < 5; i++)
	$('#myList').append(`<li>List item ${ 8 + i }</li>`)



$('#myList > li:odd').remove()




$('div.module')
.last()
.append(`<h2>Heading added by jquery</h2>
	<p>Paragrapgh added by jquery</p>`);




$('select[name="day"]')
.append(`<option value="wednesday">Wednesday</option>`);




$('div.module').last().after('<div class="module"><img src="images/bread.jpg" alt="bread" /></div>') 
