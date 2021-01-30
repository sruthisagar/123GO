
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
            "q" : "4 * 3 = _",
            "options" : ["12", "7", "14", "9"],
            "answer" : 0
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
        },

        {
            "level": "EASY (Points: 2)",
            "q" : "There were 10 cookies in the jar. My mom put 15 more today morning. How many cookies does the jar now have?",
            "options" : ["10", "35", "25", "15"],
            "answer" : 2
        },

        {
            "level": "EASY (Points: 2)",
            "q" : "I have 8 bottles of water. I finished drinking 2 of them. How many bottles of water am I left with?",
            "options" : ["6", "10", "2", "8"],
            "answer" : 0
        }
    ]
    
mediumQuestionBank = [
        {
            "level": "MEDIUM (Points: 5)",
            "q" : "99 + 8 = _",
            "options" : ["167", "210", "186", "107"],
            "answer" : 3
        },

        {
            "level": "MEDIUM (Points: 5)",
            "q" : "58 + 6 = _",
            "options" : ["69", "92", "64", "74"],
            "answer" : 2
        },

        {
            "level": "MEDIUM (Points: 5)",
            "q" : "78 - 56 = _",
            "options" : ["22", "23", "32", "12"],
            "answer" : 0
        },

        {
            "level": "MEDIUM (Points: 5)",
            "q" : "58 - 11 = _",
            "options" : ["11", "12", "47", "19"],
            "answer" : 2
        },

        {
            "level": "MEDIUM (Points: 5)",
            "q" : "4 * 5 = _",
            "options" : ["45", "15", "80", "20"],
            "answer" : 3
        },

        {
            "level": "MEDIUM (Points: 5)",
            "q" : "Sania counted 3  flowers in the flower pot. Each flower has 3 petals. How many petals are there in all?",
            "options" : ["3", "6", "9", "12"],
            "answer" : 2
        },

        {
            "level": "MEDIUM (Points: 5)",
            "q" : "My friend and I bought 15 balls each. How many balls did we buy?",
            "options" : ["15", "30", "17", "13"],
            "answer" : 1
        }
    ]

hardQuestionBank = [
    {
        "level": "HARD (Points: 10)",
        "q" : "69 + 98 = _",
        "options" : ["158", "167", "168", "166"],
        "answer" : 1
    },

    {
        "level": "HARD (Points: 10)",
        "q" : "56 - _ = 20",
        "options" : ["45", "26", "36", "35"],
        "answer" : 2
    },

    {
        "level": "HARD (Points: 10)",
        "q" : "6 * 9 = _",
        "options" : ["23", "54", "49", "54"],
        "answer" : 1
    },

    {
        "level": "HARD (Points: 10)",
        "q" : "8 * 7 = _",
        "options" : ["54", "59", "66", "56"],
        "answer" : 3
    },

    {
        "level": "HARD (Points: 10)",
        "q" : "55 / 5 = _",
        "options" : ["11", "5", "9", "12"],
        "answer" : 0
    },

    {
        "level": "HARD (Points: 10)",
        "q" : "There are 36 pages in this book. I plan to read 6 pages a day. How many days will I take to finish the book?",
        "options" : ["30", "42", "36", "6"],
        "answer" : 3
    },

    {
        "level": "HARD (Points: 10)",
        "q" : "I am thinking of an odd number.It is greater than 11 and less than 14. What could my odd number be?",
        "options" : ["10", "13", "12", "15"],
        "answer" : 1
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
//            $("#next").click(function() {
//                location.href="index.html";
//            });
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
        if(selectedOption == currentQuestion["answer"])
        {
            if(selectedOption == 0)
            {
                $("#op1").css("background-color", "#8cd98c");
            }
            else if(selectedOption == 1)
            {
                $("#op2").css("background-color", "#8cd98c");
            }
            else if(selectedOption == 2)
            {
                $("#op3").css("background-color", "#8cd98c");
            }
            else if(selectedOption == 3)
            {
                $("#op4").css("background-color", "#8cd98c");
            }
            
            if(scoreCalculated == false)
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
            
        }
        else
        {
            scoreCalculated = true;
            
            if(selectedOption == 0)
            {
                $("#op1").css("background-color", "#ff8566");
            }
            else if(selectedOption == 1)
            {
                $("#op2").css("background-color", "#ff8566");
            }
            else if(selectedOption == 2)
            {
                $("#op3").css("background-color", "#ff8566");
            }
            else if(selectedOption == 3)
            {
                $("#op4").css("background-color", "#ff8566");
            }
        }
        
        $("#score").html(localStorage["score"]);
        
    });
    
    $("#next").click(function() {
        loadQuestion();
        scoreCalculated = false;
        
        $("#op1").css("background-color", "#f0f0f5");
        $("#op2").css("background-color", "#f0f0f5");
        $("#op3").css("background-color", "#f0f0f5");
        $("#op4").css("background-color", "#f0f0f5");
        
    });

});