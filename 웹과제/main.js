$(document).ready(function() {
    $(".menuBtn").click(function() {
        $(".menuNav").slideToggle();
    });
});

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
