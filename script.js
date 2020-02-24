$(document).ready(function(){
    $("#des").click(function(){
        $(".click").toggle();
        $(".type").toggle();
    });
});

$(document).ready(function(){
    $("#dev").click(function(){
    $(".click1").toggle();
    $(".type1").toggle();
});
});

$(document).ready(function(){
    $("#prod").click(function(){
        $(".click2").toggle();
        $(".type2").toggle();
    });
});

// var name = prompt("Please enter your name");

// if (person == null || person == "") {
//   txt = "User cancelled the prompt.";
// } else {
//   txt = "Hello " + person + "! How are you today?";
// }