/*! bzSlider v0.1.0 by Vitalii Savchuk(esvit666@gmail.com) - https://github.com/esvit/bz-slider - New BSD License */
!function(a,b){return"function"==typeof define&&define.amd?(define("bzSlider",["angular"],function(a,c){return b(c)}),void 0):b(a)}(angular||null,function(a){var b=a.module("bzSlider",[]),c=["$scope","$timeout","$parse",function(a,b){var c=null;a.$slides=a.$slides||[],a.$play=!1,a.play=function(){c=b(function(){a.next(),a.play()},a.$delay||2e3),a.$play=!0},a.stop=function(){b.cancel(c),c=null,a.$play=!1},a.next=function(){var b=a.$slides.length;b>0&&(a.$slideIndex=a.$slideIndex==b-1?0:a.$slideIndex+1)},a.prev=function(){var b=a.$slides.length;b>0&&(a.$slideIndex=0==a.$slideIndex?b-1:a.$slideIndex-1)},a.setIndex=function(b){a.$slideIndex=b}}];return b.directive("bzSlider",["$timeout","$parse",function(b,d){return{restrict:"AC",replace:!1,scope:!0,controller:c,link:function(b,c,e){c.addClass("bz-slider"),b.$slideIndex=0,b.$slides=[],b.$watch(e.bzSlider,function(){var d=[];a.forEach(c.children(),function(b){a.element(b).hasClass("bz-slide")&&d.push(b)}),b.$slides=d}),a.isDefined(e.delay)&&b.$watch(e.delay,function(a){b.$delay=a}),a.isDefined(e.autoplay)&&(b.$autoplay=d(e.autoplay)(b),b.$autoplay&&b.play())}}}]),b});
//# sourceMappingURL=bz-slider.map