$(function(){
  $('#changeButton').css({
  	'margen-left': '20px',
  	'margen-botton': '50px'
  })
  .click(function(){
  	$('.news-item').first().html('<smll> Мелкий текст</small> ')
  });
  /*$('.news-time').click(function(){
  	$('#column-left').children().css ('border','1px solid red');*/
  	/*$(this).parents(".news-item").prev().css ('border','1px solid red');*/
  	/*$(this).parents(".news-item").css ('border','1px solid red');*/

  /*.click(function(){
     $('.news-coments-count').each(function(){
  	if($(this).text() > 20) {
  		$(this).css('color','red');
  	}
  });
   */
    
});