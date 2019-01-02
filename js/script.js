/* global $ */

$(document).ready(function() {
    function question1(answer){ 
        if (answer === "reading" ) { 
            return 4;
        }
        else if (answer=== "coding"){ 
            return 5 ; 
        }
        else if (answer === "sport") {
            return 3; 
        } 
        else if ( answer === "clothing") {
            return 2;
        } 
    }
    
    function question2(answer) { 
        if (answer === "waffles") { 
            return 1;
        } 
        else if (answer === "panckakes"){ 
            return 5; 
        } 
        else if (answer === "French Toast"){
            return 3;
        } 
    } 
    
        
        
    $("button").click(function() {
        var name = $("#name").val();
        var finalAnswer = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Input = $("#question1").val();
        var q2Input = $("#question2").val();
        var q3Input = $("#question3").val();
        var totalScore;
        
    });

});
