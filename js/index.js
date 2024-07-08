const secSectionHeight = $("#home").height();
const backToTop = $(".backtotop");
const navHeight = $("nav").outerHeight();
$(window).scroll(function () {
  if ($(window).scrollTop() > secSectionHeight - navHeight / 2) {
    $("nav").css("backgroundColor", "rgba(0,0,0,.7)");
    backToTop.show(500).css("display", "flex");
  } else {
    $("nav").css("backgroundColor", "transparent");
    backToTop.hide(500);
  }
});

$(backToTop).on("click", function () {
  $("html").animate({ scrollTop: 0 }, 500);
});

// const sec1= $("#home").offset().top;
// // console.log(sec1);
// $("#sec1").on("click",function(){
//     $("html").animate({scrollTop:sec1},500)
// })
$("nav #navbarSupportedContent a").on("click", function (e) {
  let x = $(e.target).attr("href");
  let y = $(x).offset().top - navHeight;

  $("html").animate({ scrollTop: y }, 500);
});

// window.addEventListener("load", function () {
//   $(".loadingscreen").fadeOut(500, function () {
//     $(".loadingscreen").removeClass("d-flex");
//     $("body").css("overflow", "auto");
//   });
// });
$(document).ready(function () {
  $(".loadingscreen").fadeOut(1000, function () {
    $(".loadingscreen").removeClass("d-flex");
    $("body").css("overflow", "auto");
  });
});

// colorbox
$(".colorbox span").eq(0).css("backgroundColor", "#353330");
$(".colorbox span").eq(1).css("backgroundColor", "#8e7754");
$(".colorbox span").eq(2).css("backgroundColor", "gray");
$(".colorbox span").eq(3).css("backgroundColor", "lightgray");
$(".colorbox span").eq(4).css("backgroundColor", "#403d38");
$(".colorbox span").eq(5).css("backgroundColor", " black");
const outerwidth=$(".colorbox").outerWidth()

$(".colorbox .ico").click(function(){
if($(".colorbox ").css("left") =="0px"){
  $(".colorbox").animate({left:-outerwidth})
}else{
  $(".colorbox").animate({left:0})
}

})



$(".colorbox span").click(function(e){
  const bgcolor=$(e.target).css("backgroundColor")
$("h1,h2,h3,h4,h5,p,span").css("color",bgcolor)
})