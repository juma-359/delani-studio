// $(document).ready(function(){
//     $(".icon-hide").click(function(){
//         $("#design-show").toogle()
//         $("#elani-show").toogle()
//     })
// })
var documents = document
$(document).ready(function(){
    $(".icon-hide").click(function(){
        $("design-show").hide();
    });
    $(".icon-hide").click(function(){
        $("#design-show").show();
    });
});