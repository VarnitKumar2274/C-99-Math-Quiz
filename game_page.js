player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

player1 = player1_name + " : " + player1_score;
player2 = player2_name + " : " + player2_score;

document.getElementById("player1").innerHTML = player1;
document.getElementById("player2").innerHTML = player2;

document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;

question_turn = "player1"
answer_turn = "player2"

 function send() {
   number_1 = document.getElementById("number_1").value
   number_2 = document.getElementById("number_2").value
   number_answer = number_1 * number_2
   number_question = number_1 + " X " + number_2;

    question_word = "<h4 id='word_display'> Q. " + number_question + "</h4>"
    input = "<br> Answer : <input type='word' id='input_check_box'>"
    check_button = "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_word + input + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").innerHTML = " ";
    document.getElementById("number_2").innerHTML = " ";
 };

 function check() {
   get_answer = document.getElementById("input_check_box").value
   answer = get_answer.toLowerCase()
   document.getElementById("output").innerHTML = "";

   if(answer == number_answer) {
      
      if(answer_turn == "player2"){
        
         player2_score = player2_score + 1;
      player2 = player2_name + " : " + player2_score;
      document.getElementById("player2").innerHTML = player2
      }
      
     



   
      else
      {
         player1_score = player1_score + 1;
         player1 = player1_name + " : " + player1_score;
         document.getElementById("player1").innerHTML = player1
         

      }
   }

   if(question_turn == "player1") {
      
      question_turn = "player2"
      document.getElementById("player_question").innerHTML = "Question turn - " + player2_name;
   }
   else
   {
      question_turn = "player1"
      document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
   }

   if(answer_turn == "player1") {
      
      answer_turn = "player2"
      document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;
   }
   else
   {
      answer_turn = "player1"
      document.getElementById("player_answer").innerHTML = "Answer turn - " + player1_name;
   }
 }