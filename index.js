/*$(document).ready(function(){
$("h1").css("color","red") ;
})*/
//$("h1").addClass("big-title margin-50");
/*$("h1").text("bye");
$("button").html("<em>hey</em>")*/
//console.log($("img").attr("src"));
//$("a").attr("href","https://www.yahoo.com");
/*$("h1").click(function(){
    $("h1").css("color","purple");
})*/
/*for(var i=0;i<5;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        document.querySelector("h1").style.color="purple";
    });
}
$("button").click(function(){
    $("h1").css("color","yellow");
});*/
/*$(document).keypress(function(event){
   $("h1").text(event.key);
});*/
/*$("h1").on('click',function(){
    $("h1").css("color","pink");
});*/
$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});
