$(document).ready(function(){
    $('#marveltext').fadeIn().
    $('#marveltext').animate({
        left:"400px",

    },"slow"); 
});

$(document).ready(function(){
    $(Window).scroll(function(){
        let scroll=$(window).scrollTop();
        $('marvelimage').css('top',scroll+'px');
    })
})
