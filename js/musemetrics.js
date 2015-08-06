$(document).ready(function(){
  
  var toggle = $('.toggle'),
      ul = $('ul');
  toggle.on('click', function(){
    ul.toggleClass('show');
  });
  
});