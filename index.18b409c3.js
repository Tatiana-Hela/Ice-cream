$((function(){$.fn.scrollToTop=function(){$(this).hide().removeAttr("href"),"0"!=$(window).scrollTop()&&$(this).fadeIn("slow");var o=$(this);$(window).scroll((function(){"0"==$(window).scrollTop()?$(o).fadeOut("slow"):$(o).fadeIn("slow")})),$(this).click((function(){$("html, body").animate({scrollTop:0},"slow")}))}})),$((function(){$("#toTop").scrollToTop()}));
//# sourceMappingURL=index.18b409c3.js.map
