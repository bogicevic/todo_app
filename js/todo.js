// // Check off specific todos by clicking
// $('li').click(function(){
//   if($(this).css('text-decoration') === 'line-through'){
//     $(this).css({
//       color: 'black',
//       textDecoration: 'none'
//     });
// // and other way around
//   } else {
//     $(this).css({
//       color: 'gray',
//       textDecoration: 'line-through'
//     });
//   }
// });

// or, same thing, just in a single line
// on method instead of click, for setting up
// event listener on future [added] li elements,
// not just existing ones
$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
});

// click on fa-trash to delete todo
// using on method, for future elements
$('ul').on('click', 'span', function(event) {
  $(this).parent().fadeOut(300, function() {
    $(this).remove();
  });
  // prevent event bubbling
  event.stopPropagation();
})

$('input[type="text"]').keypress(function(event) {
  if(event.which === 13) {
    var todoText = $(this).val();
    $(this).val(' ');
    $('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + todoText + '</li>');
  }
})

$('.fa-language').click(function() {
  $('input[type="text"]').fadeToggle(300);
});
