const mobile=document.querySelector('.menu-toggle')
const mobileLink=document.querySelector('.sidebar')

mobile.addEventListener("click",function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("is-active");
})

mobileLink.addEventListener("click",function(){
    const menuBars=document.querySelector(".is-active");
    if(window.innerWidth<=768 && menuBars){
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active")
    }
})



var step=100;
var stepFilter=60;
var scrolling=true;

$(".back").bind("click" ,function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft:"-=" + step + "px"
    });
});

$(".next").bind("click" ,function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft:"+=" + step + "px"
    });
});



//move left right menu filter


$(document).ready(function() {
    var stepFilter = 100; 
    $(".back-menu").on("click", function(e) {
        e.preventDefault();
        $(".filter-wrapper").animate({
            scrollLeft: "-=" + stepFilter + "px"
        });
    });

    $(".next-menu").on("click", function(e) {
        e.preventDefault();
        $(".filter-wrapper").animate({
            scrollLeft: "+=" + stepFilter + "px"
        });
    });
});


const links = document.querySelectorAll('.sidebar-menus a');

links.forEach(link => {
  link.addEventListener('click', function() {
    // Remove active class from all links
    links.forEach(item => item.classList.remove('active'));

    // Add active class to the clicked link
    this.classList.add('active');
  });
});

