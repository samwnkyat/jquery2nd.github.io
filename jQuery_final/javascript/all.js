$(document).ready(function() {
    //TOP按鈕
    function showBtnCondition() {
      if ($(this).scrollTop() > 600) {
        $('.top').fadeIn();
          } else {
           $('.top').fadeOut();
         }
       }
   $(window).scroll(showBtnCondition);
     
    // 下拉式選單
  $(".dropdown").click(function (event) {
    event.preventDefault();
    event.stopPropagation();
    $(this).parent().find(".dropdown-list").stop().slideToggle();
    $(this).parent().siblings().find(".dropdown-list").slideUp();
  });
  $("html:not(.dropdown)").click(function () {
    $(".dropdown-list").slideUp("slow");
  });
  
    // Swiper輪播
    const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      autoplay: {
        delay: 2000,
    },

    });
    // Lightbox 燈箱效果
    lightbox.option({
      'resizeDuration': 500,
      'wrapAround': true,
      'fitImagesInViewport':true
  });
           
});