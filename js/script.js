/* global $ */

$(document).ready(function() {
    function question1(answer){ 
        
        if (answer=== "future"){ 
            return 5 ; 
        }
        else if (answer === "past") {
            return 3; 
        } 
    } 
    function question2(answer) { 
        if (answer === "virtual reality") { 
            return 7;
        } 
        else if (answer === "real life"){ 
            return 2; 
        } 
    } 
    
    function question3(answer) { 
        if (answer === "instrumetal") {
            return 3;
            
            
        else if (answer === "jazz") { 
            return 6; 
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
        
        var question1Score = question1(q1Input);
        var question2Score = question2(q2Input); 
    
        
        function totalScore () { 
            
    });

});
            
        
    