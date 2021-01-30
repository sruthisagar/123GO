var name;

$(document).ready(function(){    
    
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.loop = true;
    audio.play();

    $("#player").html(localStorage["name"]);
    
    
    $("#save").click(function() {
        name = $("#input-name").val();
        localStorage.setItem("name", name);
        $("#player").html(localStorage["name"]);
    });
    
    
    localStorage["score"] = "Score: 0";
    
//    colour change on hover
    $("button").mouseenter(function() {
        $(this).css("background-color","#d1d1e0");
    });
    
    $("button").mouseleave(function() {
        $(this).css("background-color","#f0f0f5");
    });
    


//    setting 1st question as currentQuestion for each level
    $("#test").click(function() {
        localStorage.setItem("level","test");

    });
    
    $("#easy").click(function() {
        localStorage.setItem("level","easy");

    });
    
    $("#medium").click(function() {
        localStorage.setItem("level","medium");

    });
    
    $("#hard").click(function() {
        localStorage.setItem("level","hard");
    });    
    
    

});