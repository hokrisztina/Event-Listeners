$( ".submit" ).on( "click", function() {
    alert("Yeah, you clicked me.");
    console.log("Yeah, you clicked me");
});
$(".menuitems").click(function(){
    $(".submit").text("Changing the text");
});
$(".item1").click(function(){
    $("button").css("background-color", "yellow")

});