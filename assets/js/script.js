$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });
    // Navbar menu button
$('.menubtn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menubtn i').toggleClass("active");
});

var typed = new Typed(".typing",{
    strings:["Web Developer", "Backend Developer", "Computer Engineering"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});
var typed = new Typed(".typing2",{
    strings:["HTML","CSS","MySQL","MERN"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});



});
