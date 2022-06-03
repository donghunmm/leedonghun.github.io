$(document).ready(function() {
    $(".menuBtn").click(function() {
        $(".menuNav").slideToggle();
    });
});
$(function(){
    stickyFooter();

    $(window).scroll(stickyFooter).resize(stickyFooter);
});


function stickyFooter(){
    document_height = $(document).height();
    document_scrollTop = $(document).scrollTop(); 
    window_height = $(window).height(); 
    footer_height = $("footer").height();

    gap = document_height - footer_height - window_height; 
    bottom = document_scrollTop - gap ; 
    if(document_scrollTop=gap){
        $("footer").css("bottom:0px");
    }
    if(document_scrollTop > gap){
        $("footer").css("bottom", bottom+"px");
    }else{
        $("footer").css("bottom","0");
    }
}

$(document).on("click", 'a[href="#home"]', function(){
	$("#menu_aboutme").hide();
    $("#menu_home").show();
    $("#menu_hobby").hide();
    $("#menu_contact").hide();
});

$(document).on("click", 'a[href="#aboutme"]', function(){
	$("#menu_aboutme").show();
    $("#menu_home").hide();
    $("#menu_hobby").hide();
    $("#menu_contact").hide();
});
$(document).on("click", 'a[href="#hobby"]', function(){
	$("#menu_aboutme").hide();
    $("#menu_home").hide();
    $("#menu_hobby").show();
    $("#menu_contact").hide();
});
$(document).on("click", 'a[href="#contact"]', function(){
	$("#menu_aboutme").hide();
    $("#menu_home").hide();
    $("#menu_hobby").hide();
    $("#menu_contact").show();
});
