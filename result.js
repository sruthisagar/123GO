$(document).ready(function() {
    
    $("#congrats").html("CONGRATULATIONS " + localStorage["name"] + "!!!");
    
    if(localStorage["level"] == "test"){
        if((localStorage["score"] >= 0) && (localStorage["score"] < 5))
        {
            $("#display-level").html("YOUR LEVEL IS EASY");
        }
        else if((localStorage["score"] >= 5) && (localStorage["score"] < 10))
        {
            $("#display-level").html("YOUR LEVEL IS MEDIUM");
        }
        else if((localStorage["score"] >= 10))
        {
            $("#display-level").html("YOUR LEVEL IS HARD");
        }
    }
    else if(localStorage["level"] == "easy")
    {
        $("#display-level").html("LEVEL: EASY");
    }
    else if(localStorage["level"] == "medium")
    {
        $("#display-level").html("LEVEL: MEDIUM");
    }
    else if(localStorage["level"] == "hard")
    {
        $("#display-level").html("LEVEL: HARD");
    }
    
    $("#display-score").html("Score: " + localStorage["score"]);
    
});