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