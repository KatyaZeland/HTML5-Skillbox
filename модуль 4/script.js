$(function(){
	function changeFontColor()
	{
		$('#container').toggleClass('newStyle');
	}
	$('#changeColor, '#list-one).on ('focus', function(){
    $(this).css('background-color', 'pink');
	});
	$('#list-one').on ('blur', function(){
    $(this).css('background-color', 'write');
	});
});