player1_name = localStorage.getItem("user1");
player2_name = localStorage.getItem("user2");
player1_score = 0;
player2_score = 0;
answer_TURN = "player2"
question_TURN ="player1";

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send(){

number1 = document.getElementById("questuon_input1").value
number2 = document.getElementById("questuon_input2").value
actual_answer = parseInt(number1) *parseInt(number2)
question_number= "<h4>"+number1+"X"+number2+"</h4>"
input_box = "<br>ANSWER:<input type='text' id='input_check_box'>";
check_button =  "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number+input_box+check_button

document.getElementById("output").innerHTML = row;
document.getElementById("questuon_input1").value="";
document.getElementById("questuon_input2").value="";
}

function check(){

        answer_player=document.getElementById("input_check_box").value
            if(actual_answer==answer_player){
                if(answer_TURN=="player1"){
                    player1_score = player1_score+1
                    document.getElementById("player1_score").innerHTML=player1_score
                }

          else{
            player2_score = player2_score+1
            document.getElementById("player2_score").innerHTML=player2_score
          }

          if(question_TURN=="player1"){
          question_TURN = "player2"
          document.getElementById("player_question").innerHTML =  "Question Turn - " + player2_name;
            }

           else{
            question_TURN = "player1"
            document.getElementById("player_question").innerHTML =  "Question Turn - " + player1_name;
        }

        if(answer_TURN=="player2"){
            answer_TURN = "player1"
            document.getElementById("player_answer").innerHTML =  "Answer Turn - " + player1_name;
        }

       else{
            answer_TURN = "player2"
            document.getElementById("player_answer").innerHTML =  "Answer Turn - " + player2_name;
        }
              }
     document.getElementById("output").innerHTML=""
            }





