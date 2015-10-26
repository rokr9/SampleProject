$(function(){                       //animation for the intial load of the list.
	$('li').hide().each(function(index){
		$(this).delay(index * 200).fadeIn(1000);  //list items are hidden initially and are loaded with delay based on the index value of the list item.
	});
});
function count(){
	var items = $('li[class != complete]').length;  //Checking if the list item has class complete and then updating the count.
	$('.label').text(items);
}
count();

$('#formItem').on('submit', function(e){
	e.preventDefault(); // preventing default submit action.
	var text = $('input:text').val(); 
    $('ul').append('<li>' + text + '</li>');  //Adding the value entered in the text box to the list.
    $('input:text').val('');    //clearing the text input element after the task is appended.   
    count();                            
  });


$('ul').on('click', 'li', function(){ //using the event delegation.

    var complete = $(this).hasClass('complete');  

    if (complete === true) { //if class is complete, deleting the li element.
      $(this).animate({  
        opacity: 0.0,
      }, 500, 'swing', function() {  //i googled for this animation.
        $(this).remove();  
      });
    } else {   
      item = $(this).text();     //if class is not complete then removing the element and appending it to end of the list with class complete.
      $(this).remove(); 
      $('ul')     
        .append('<li class=\"complete\">' + item + '</li>')
        .hide().fadeIn(300);    
      count();                
    }                            
  }); 