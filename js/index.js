$(document).ready(function(){
        
new WOW().init();

//......................
        
var w = window.innerHeight;
    
$('header').css('height', w);
    
//...................... start menu when scroll ................
        
var h2Offset = $("#header").offset().top;
    
$(window).scroll(function(){
    
    if( $(window).scrollTop() > h2Offset )
        {
            
        $('#header').css({'position':'fixed', 'backgroundColor':'#fff', 'z-index':'9999999999', 'height':'70px', 'top':'0', 'borderBottom':'1px solid #e6e3e3'});
        
        $('.navbar-light .navbar-nav .nav-link').css('color','#000');
                    
        $('.navbar-light .navbar-brand').css('color','#000');
            
        $('.navbar-light .navbar-nav .nav-link, .btn-primary').hover(function(){
                    $(this).css('color','#f9a02c');
        });
            
        $('.navbar-light .navbar-nav .nav-link, .btn-primary').mouseout(function(){
                    $(this).css('color','#000');
        });
            
        $('.btn-primary').css('color','#000');    
            
        $('.navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-nav .active').css('color','#f9a02c');
            
                    $('#navbarSupportedContent').css('zIndex','9999999999999999999');

            
       
    } else {
        
        $('#header').css({'backgroundColor':'transparent', 'borderBottom':'0'});
        $('.navbar-light .navbar-nav .nav-link, .navbar-light .navbar-brand, .btn-primary').css('color','#fff');
        
        $('.navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-nav .nav-link.active').css('color','#f9a02c');
        
                            $('#navbarSupportedContent').css('zIndex','9999999999999999999');

        
        $('.navbar-light .navbar-nav .nav-link, .btn-primary').mousedown(function(){
                    $(this).css('color','#f9a02c');
        });
        
        $('.btn-primary, .navbar-light .navbar-nav .nav-link').mouseout(function(){
                    $(this).css('color','#fff');
        });

        
        
    }
})
    
//...................... End menu when scroll ................
    
$(".navbar a").click(function(){
    
    
$("html,body").animate({
    
    
    scrollTop: $( $(this).attr("href") ).offset().top  },1000)    
})
    
$('.buttontop').click(function(){
$('html, body').animate({scrollTop:'0'}, 2000)
});
    
    $(window).scroll(function(){
    
    if($(window).scrollTop() > 700) {
        
     $(".buttontop").fadeIn(1000)
    } else {
        $('.buttontop').fadeOut(1000)
    }
})

});
    