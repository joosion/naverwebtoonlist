$(document).ready(function () {
      $(function () {
            $(window).scroll(function () {
                  if ($(this).scrollTop() >= Math.ceil($('.gaugecover').offset().top)) {

                    $(".meter > span").each(function () {
                      $(this)
                        .data("origWidth", $(this).width())
                        .width(0)
                        .animate({width: $(this).data("origWidth")},1200);})
                    }})
                    $(".gnb li").on("click", function () {
                      $(this).addClass("on")
                      $(this).siblings().removeClass("on")})

                    $(".list li").on("click", function () {
                      $(this).addClass("on")
                      $(this).siblings().removeClass("on")})

                      $(".date li").on("click", function () {
                        $(this).addClass("on")
                        $(this).siblings().removeClass("on")})

                        
})})