$(window).scroll(function(){if($(window).scrollTop()>=500){$(".main1").addClass("logo_menu_fixed");$(".main1").removeClass("logo_menu_notfixed");$("#cssmenu").addClass("menu_height")}else{$(".main1").removeClass("logo_menu_fixed");$(".main1").addClass("logo_menu_notfixed");$("#cssmenu").removeClass("menu_height")}});
jQuery(document).ready(function(){$("div#cssmenu ul li").on("click",function(event){var ids=$(this).attr("id");var myVar1=$("div#cssmenu ul").find(".active").attr("id");$(this).addClass("active");$("#"+myVar1).removeClass("active");$("html, body").animate({scrollTop:$("."+ids).offset().top},2E3)})});
(function($){$(function(){$("span.mask").hover(function(){$(this).siblings("a img").addClass("hovering")},function(){$(this).siblings("a img").removeClass("hovering")});$("span.mask1").hover(function(){$(this).siblings("#m2").addClass("hovering1")},function(){$(this).siblings("#m2").removeClass("hovering1")})})})(jQuery);
jQuery(document).ready(function(){$(".Count").each(function(){var $this=$(this);jQuery({Counter:0}).animate({Counter:$this.text()},{duration:8E7,easing:"swing",step:function(){$this.text(Math.ceil(this.Counter))}})});$(".Count1").each(function(){var $this=$(this);jQuery({Counter:0}).animate({Counter:$this.text()},{duration:1E4,easing:"swing",step:function(){$this.text(Math.ceil(this.Counter))}})})});
$(document).ready(function(){$(".fancybox").fancybox();$(".fancybox-effects-a").fancybox({helpers:{title:{type:"outside"},overlay:{speedOut:0}}});$(".fancybox-effects-b").fancybox({openEffect:"none",closeEffect:"none",helpers:{title:{type:"over"}}});$(".fancybox-effects-c").fancybox({wrapCSS:"fancybox-custom",closeClick:true,openEffect:"none",helpers:{title:{type:"inside"},overlay:{css:{"background":"rgba(238,238,238,0.85)"}}}});$(".fancybox-effects-d").fancybox({padding:0,openEffect:"elastic",openSpeed:150,
closeEffect:"elastic",closeSpeed:150,closeClick:true,helpers:{overlay:null}});$(".fancybox-buttons").fancybox({openEffect:"none",closeEffect:"none",prevEffect:"none",nextEffect:"none",closeBtn:false,helpers:{title:{type:"inside"},buttons:{}},afterLoad:function(){this.title="Image "+(this.index+1)+" of "+this.group.length+(this.title?" - "+this.title:"")}});$(".fancybox-thumbs").fancybox({prevEffect:"none",nextEffect:"none",closeBtn:false,arrows:false,nextClick:true,helpers:{thumbs:{width:50,height:50}}});
$(".fancybox-media").attr("rel","media-gallery").fancybox({openEffect:"none",closeEffect:"none",prevEffect:"none",nextEffect:"none",arrows:false,helpers:{media:{},buttons:{}}});$("#fancybox-manual-a").click(function(){$.fancybox.open("1_b.jpg")});$("#fancybox-manual-b").click(function(){$.fancybox.open({href:"iframe.html",type:"iframe",padding:5})});$("#fancybox-manual-c").click(function(){$.fancybox.open([{href:"1_b.jpg",title:"My title"},{href:"2_b.jpg",title:"2nd title"},{href:"3_b.jpg"}],{helpers:{thumbs:{width:75,
height:50}}})})});

/* pop up rate chart*/

$(document).on('ready', function(){  

    $modal = $('.modal-frame');
    $overlay = $('.modal-overlay');

    /* ooo look at meeee I know how to use animateend to watch for events meh meh meh... Anyway, need this to clear out the keyframe classes so they dont clash with each other between ener/leave. Cheers. */
    $modal.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
      if($modal.hasClass('state-leave')) {
        $modal.removeClass('state-leave');
      }
    });

    $('.close').on('click', function(){
      $overlay.removeClass('state-show');
      $modal.removeClass('state-appear').addClass('state-leave');
	    $('body').css('overflow', 'scroll');
    });

    $('.open').on('click', function(){
      $overlay.addClass('state-show');
      $modal.removeClass('state-leave').addClass('state-appear');
	  $('body').css('overflow', 'hidden');
    });

  });

/* pop up rate chart*/
/* twitter */
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
/* /twitter */
/* location other */
jQuery("#location").change(function() {
	if(jQuery("#location").val() == 'Other') {
		jQuery(".location_other_form").show();
	} else {
		jQuery(".location_other_form").hide();
	}
}).trigger('change');
/* location other */


$( '.ecaptainslider' ).on('click', function(event) {
    event.preventDefault();
    
    $('html, body').animate({
        scrollTop: $("#testing66").offset().top
    }, 2000);
});
$( '.processslider' ).on('click', function(event) {
    event.preventDefault();
    
    $('html, body').animate({
        scrollTop: $("#testing22").offset().top
    }, 2000);
});
$( '.factsslider' ).on('click', function(event) {
    event.preventDefault();
    
    $('html, body').animate({
        scrollTop: $("#testing").offset().top
    }, 2000);
});

