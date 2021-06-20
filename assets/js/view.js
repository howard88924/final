
$(function(){

  var H = $('.all').offset().top -500;
  // alert(H);

  $(window).scroll(function(){

    var N = $(window).scrollTop();
    console.log(N);

    if(N > H){
      $('.all').animate({bottom:'0',opacity:'1'},500);
    }
    
    if(N > 500){
       $('.toTop').animate({opacity:'1'},10);
    }
    if(N < 400){
       $('.toTop').animate({opacity:'0'},10);
    }
    
    if(N > 400){
      $('.content').animate({bottom:'0',opacity:'1'},500);
    }
    if(N > 900){
      $('.hot').animate({bottom:'0',opacity:'1'},500);
    }
    if(N > 110){
      $('.contact').animate({bottom:'0',opacity:'1'},500);
    }
 


  })

  
  
})







