$(document).ready(function(){
    $("#openbtn").click(function(){
        document.getElementById("myRightnav").style.width = "250px";
        document.getElementById("main").style.marginRight = "250px";
        $("#openbtn").hide();
    });
});

$(document).ready(function(){
    $("#closebtn").click(function(){
        document.getElementById("myRightnav").style.width = "0px";
        document.getElementById("main").style.marginRight = "30px";
        $("#openbtn").show();
    });
});