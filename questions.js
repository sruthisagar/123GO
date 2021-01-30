
var i=0;
var selectedOption = -1;
var currentQuestionBank = "none";
var currentQuestion = "none";
var score = 0;
var scoreCalculated = false;

//alert(window.location.href);

testQuestionBank = [
        {
            "level": "EASY (Points: 2)",
            "q" : "4 + 5 = _",
            "options" : ["45", "8", "9", "54"],
            "answer" : 2
        },

        {
            "level": "MEDIUM (Points: 5)",
            "q" : "32.7 + 74.5 = _",
            "options" : ["125.6", "107.2", "121.2", "104.5"],
            "answer" : 1
        },

        {
            "level": "HARD (Points: 10)",
            "q" : "5.4 + 8.9 = _",
            "options" : ["53.18", "51.07", "45.01", "48.06"],
            "answer" : 3
        }
    ]
    
easyQuestionBank = [
        {
            "level": "EASY (Points: 2)",
            "q" : "8 + 9 = _",
            "options" : ["17", "16", "14", "19"],
            "answer" : 0
        },

        {
            "level": "EASY (Points: 2)",
            "q" : "12 + 65 = _",
            "options" : ["76", "66", "67", "77"],
            "answer" : 3
        },

        {
            "level": "EASY (Points: 2)",
            "q" : "9 - 5 = _",
            "options" : ["14", "5", "4", "12"],
            "answer" : 2
        },

        {
            "level": "EASY (Points: 2)",
            "q" : "7 + _ = 9",
            "options" : ["4", "2", "1", "3"],
            "answer" : 1
        },

        {
            "level": "EASY (Points: 2)",
            "q" : "16 + 5 = _",
            "options" : ["31", "13", "12", "21"],
            "answer" : 3
        }
    ]
    
mediumQuestionBank = [
        {
            "level": "MEDIUM (Points: 5)",
            "q" : "999 + 868 = _",
            "options" : ["1677", "2109", "1867", "2059"],
            "answer" : 3
        },

        {
            "level": "MEDIUM (Points: 5)",
            "q" : "58.3 + 68.7 = _",
            "options" : ["145.0", "127.0", "139.2", "114"],
            "answer" : 2
        },

        {
            "level": "MEDIUM (Points: 5)",
            "q" : "78 - 56 = _",
            "options" : ["22", "23", "32", "12"],
            "answer" : 1
        },

        {
            "level": "MEDIUM (Points: 5)",
            "q" : "58.3 - 45.8 = _",
            "options" : ["11.5", "12.5", "13.4", "11.4"],
            "answer" : 2
        },

        {
            "level": "MEDIUM (Points: 5)",
            "q" : "4 * 5 = _",
            "options" : ["45", "15", "80", "20"],
            "answer" : 4
        }
    ]
    
hardQuestionBank = [
        {
            "level": "HARD (Points: 10)",
            "q" : "69.5 + 98.6 = _",
            "options" : ["158.7", "168.1", "168.9", "166.8"],
            "answer" : 1
        },

        {
            "level": "HARD (Points: 10)",
            "q" : "56.8 - _ = 20",
            "options" : ["45.8", "26.3", "36.8", "35.7"],
            "answer" : 2
        },

        {
            "level": "HARD (Points: 10)",
            "q" : "6 * 7 = _",
            "options" : ["45", "42", "49", "54"],
            "answer" : 1
        },

        {
            "level": "HARD (Points: 10)",
            "q" : "8.8 * 7.3 = _",
            "options" : ["45.8", "59.8", "66.8", "64.24"],
            "answer" : 3
        },

        {
            "level": "HARD (Points: 10)",
            "q" : "55 / 5 = _",
            "options" : ["11", "5", "9", "12"],
            "answer" : 0
        }
    ]


$(document).ready(function(){  
    
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
    
    $("#player").html(localStorage["name"]);
    
    var level = localStorage["level"];
    
    localStorage["score"] = "Score: 0";
    
    if (level == "easy"){
        currentQuestionBank = easyQuestionBank;
    }
    else if (level == "medium"){
        currentQuestionBank = mediumQuestionBank;
    }
    else if (level == "hard"){
        currentQuestionBank = hardQuestionBank;
    }
    else if (level == "test"){
        currentQuestionBank = testQuestionBank;
    }
    

    
    
//    var name = $("#input-name").val();
//    alert(name);    
    $("#go").attr('disabled', 'disabled');
    $("#go").css("background-color", "#c2c2d6");
//   $("#surveyButton").click(function(){
//     $("#go").removeAttr("disabled"); // removing attribute
//   })
    
//    colour change on hover
    $("button").mouseenter(function() {
        $(this).css("background-color","#d1d1e0");
    });
    
    $("button").mouseleave(function() {
        $(this).css("background-color","#f0f0f5");
    });
    

    
//    replacing qustion with current question    
    function loadQuestion() {

        
        if (i < currentQuestionBank.length){
            currentQuestion = currentQuestionBank[i];

            $("#level-points").html(currentQuestion["level"]);
            $("#question").html(currentQuestion["q"]);
            $("#op1").html(currentQuestion["options"][0]);
            $("#op2").html(currentQuestion["options"][1]);
            $("#op3").html(currentQuestion["options"][2]);
            $("#op4").html(currentQuestion["options"][3]);   
            i++;
    
        }
        else{
            // end of questions
            $("#next").attr('disabled', 'disabled');
            $("#next").css("background-color", "#c2c2d6");
        }
        
    }
    
    loadQuestion();
    

    
//    setting index for each option
    $("#op1").click(function() {
        selectedOption = 0;
        $("#go").removeAttr("disabled");
        $("#go").css("background-color", "#f0f0f5"); 
    });
    
    $("#op2").click(function() {
        selectedOption = 1;
        $("#go").removeAttr("disabled");
        $("#go").css("background-color", "#f0f0f5");
    });
    
    $("#op3").click(function() {
        selectedOption = 2;
        $("#go").removeAttr("disabled");
        $("#go").css("background-color", "#f0f0f5");
    });
    
    $("#op4").click(function() {
        selectedOption = 3;
        $("#go").removeAttr("disabled");
        $("#go").css("background-color", "#f0f0f5");
    });
        
    
    $("#go").click(function() {
        if((scoreCalculated == false) && (selectedOption == currentQuestion["answer"]))
        {
            if(currentQuestion["level"] == "EASY (Points: 2)"){
                score += 2;
                localStorage.setItem("score", "Score: " + score);
            }
            else if(currentQuestion["level"] == "MEDIUM (Points: 5)"){
                score += 5;
                localStorage.setItem("score", "Score: " + score);
            }
            else if(currentQuestion["level"] == "HARD (Points: 10)"){
                score += 10;
                localStorage.setItem("score", "Score: " + score);
            } 
            
            scoreCalculated = true;
            selectedOption = -1;
        }
        
        $("#score").html(localStorage["score"]);
        
    });
    
    $("#next").click(function() {
        loadQuestion();
    });

});