$(function(){
  $('#changeButton').css({
  	'margen-left': '20px',
  	'margen-botton': '50px'
  })
  .click(function(){
  $('#column-left h2').remove();
 /* $('#column-left').prepend('<h2>новий заголовок текста</h2>');
   $('#column-left').append('<h2>новий заголовок текста</h2>');
   $('#column-left').prepend(newElement);*/
   var newElement =$('<h2></h2>');
  newElement.text('Строчные новости').css('color', 'red');
  
  newElement.prependTo($('#column-left'));

  /*var newElement = document.createElement('h2');
  newElement.innerHTML = 'New header';
  newElement.style.color = 'red';
  var leftColumn = document.getElementByld('column-left');
  leftColumn.insertBefore(newElement, leftColumn.firstChild);*/
  });
    
});