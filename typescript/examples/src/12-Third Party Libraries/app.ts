import "jquery";


console.log("Hello world!!!");

$(document).ready( function(){
    console.log("Web ready and loaded...")  ;

    $("h1").text("Hello from TypeScript");
    
    $("p").text("Hello from this paragraph");

    $("h1").css("background-color","blue");
    
}); 


$("#btoAlert").on("click",function(){
    alert("Hi from TypeScript");
 

});

