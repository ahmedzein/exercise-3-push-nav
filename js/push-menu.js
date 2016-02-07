// Needs latest version of jQuery to run

$(function(){
  //shows btns when js runs
  $('body').removeClass('noscript');
  
  //sets btns to toggle data-state
  $('.toggle-btn, .close-btn').click(function(){
    toggleNav();
  });
  
});

function toggleNav(){
  if($('.site-wrapper').attr('data-state')=='slide-closed'){
    //display nav when closed
    $('.site-wrapper').attr('data-state','slide-open');
  }else{
    $('.site-wrapper').attr('data-state','slide-closed');
    //hide nav when open
  }
};