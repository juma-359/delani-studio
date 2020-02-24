$(document).ready(function(){
    $(".image").click(function(){
        $(".type").toggle();
        $(".click").toggle();
    });
});

var name =parseInt(document.getElementByClass("name").value);
var email =parseInt(document.getElementByClass("email").value);
