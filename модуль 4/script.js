$(function(){
	function changeFontColor()
	{
		$('#container').toggleClass('newStyle');
	}
	$('#changeColor, Textarea').on ('focus', function(){
    $(this).css('background-color', 'pink');
	});
	$('Textarea').on ('blur', function(){
    $(this).css('background-color', 'write');
	});
});