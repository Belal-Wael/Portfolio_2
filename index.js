// loading
$(document).ready(function(){
    $('.sk-chase').fadeOut(1000,function(){

        $('#loading').fadeOut(1000,function(){
            $('body').css('overflow','auto');
            $('#loading').remove();
        });
        
    });

    // let tLinks=document.querySelector(' header .container .nav');
    $('#Toggle').click(function(e){
       
        $('#list').toggleClass("open", 1000, "ease" )
       
    });
  
    let sectionOffset=$('#testimonial').offset().top;
    $(window).scroll(function(){
        let windowScroll=$(window).scrollTop();
        // console.log(windowScroll);
        if(windowScroll>sectionOffset - 50){
            $('header').css('backgroundColor','rgba(0,0,0,0.7)');
            $('#btn').fadeIn(500);
        }
        else{
            $('header').css('backgroundColor','black');
            $('#btn').fadeOut(500);
        }
    });


    //smooth scroll
    $("a[href^='#']").click(function(eventInfo){
        let href=eventInfo.target.getAttribute('href'); // #home , #contact
        let sectionOffset=$(href).offset().top; // 50
        $("html,body").animate({scrollTop:sectionOffset},1000); //  
    });

    $('#btn').click(function(){
        $("html,body").animate({scrollTop:0},2000)
    });
})