

var button = function(){
	$(".button-create").mouseenter(function(){
        $(".create").animate({opacity: '0.5'});
        });
    $(".button-create").mouseleave(function(){
        $(".create").animate({opacity: '1'});
    });

    $(".button-view").mouseenter(function(){
        $(".view").animate({opacity: '0.5'});
        });
    $(".button-view").mouseleave(function(){
        $(".view").animate({opacity: '1'});
    });

     $(".button-update").mouseenter(function(){
        $(".update").animate({opacity: '0.5'});
        });
    $(".button-update").mouseleave(function(){
        $(".update").animate({opacity: '1'});

    });
}


$(document).ready(button)
