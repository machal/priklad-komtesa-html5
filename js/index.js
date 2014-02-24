$(document).ready(function() {
  
  $('.polaroid a').fancybox();  
    
  // Do localStorage ukladame obsah kontaktniho formulare 
  
  if ( localStorage.getItem('comment_name') ) {
    $('.form input').val(localStorage.getItem('comment_name'));
  }
  
  if ( localStorage.getItem('comment_text') ) {
    $('.form textarea').val(localStorage.getItem('comment_text'));
  }  

  $('.form input').on('keyup', function() {
    localStorage.setItem('comment_name', $(this).val());
  });

  $('.form textarea').on('keyup', function() {
    localStorage.setItem('comment_text', $(this).val());
  });
  
  // Drag and drop  
  
  $('.polaroid').on('dragstart dragend', function(e) {
    $(this).toggleClass('dragged');
    e.originalEvent.dataTransfer.setData('element_id', $(this)[0].id);
  });  

  $('.bin').on('dragenter dragleave', function() {
    $(this).toggleClass('dragenter');
  });

  // Nutne, aby fungovala udalost 'drop'
  $('.bin').on('dragover', function(e) {
    e.preventDefault();
  });

  $('.bin').on('drop', function(e) {
    $(this).toggleClass('drop');
    console.log(e.originalEvent.dataTransfer.getData('element_id'));
    $('#'+e.originalEvent.dataTransfer.getData('element_id')).remove();
  });
  

  
});
