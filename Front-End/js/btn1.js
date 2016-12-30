$(document).ready(function(){
    $("#btn1").click(function(){
        var div = $("#btn1");  
        div.animate({left: '50px'}, "slow");
        div.animate({fontSize: '2em'}, "slow");
    });
});