/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO:
      1. Calculate the score as the total of the number of correct answers

      2. Add an Event listener for the submit button, which will display the score and highlight 
         the correct answers when the button is clicked. Use the code from lines 67 to 86 to help you.

      3. Add 2 more questions to the app (each question must have 4 options).

      4. Reload the page when the reset button is clicked (hint: search window.location)

      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */

window.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('#start');
  start.addEventListener('click', function (e) {
    document.querySelector('#quizBlock').style.display = 'block';
    start.style.display = 'none';
});
 
  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  const quizArray = [
    {
      q: 'Which is the third planet from the sun?',
      o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: 'Which is the largest ocean on Earth?',
      o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      a: 3,
    },
    {
      q: 'What is the capital of Australia?',
      o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      a: 1,
    },
    // Step-3 "Add 2 more questions to the app (each question must have 4 options)"
    {
      q: "What is the national animal of Australia?",
      o: ["Koala", "Lion", "Kangaroo", "Tiger"],
      a: 2,
    },
    {
      q: "Who is the 30th prime minister of Australia?",
      o: ["Scott Morrison", "Malcolm Turnbull", "Tony Abbott", "Julia Gillard"],
      a: 0,
    },
    // Step-3 "End"
  ];

  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
// Step-5 "Add a countdown timer"
  var sec = 60;
  var time = setInterval(myTimer, 1000);
// step-5. "Add a countdown timer - when the time is up, end the quiz,display the score and highlight the correct answers"
  function myTimer() {
    document.getElementById('time').innerHTML = sec + " second/s left";
          sec--;
        if (sec == -2) {
              clearInterval(time);
              alert("Your time is up" + "Please Reload the Quiz");
              alert("Click OK to start again.");
              location.reload();
          }
      }  
  };
  //call the display function
    displayQuiz();

  function clickSubmit() {
    document.getElementById("btnSubmit").click();
  }
  setTimeout(clickSubmit, 60000); 

  // step-5 "end"

  // Step-2 "Add an Event listener for the submit button, which will display the score and highlight the correct answers when the button is clicked"
  // add event listener for submit button click
  const submitQuiz = document.getElementById("btnSubmit");
  submitQuiz.addEventListener("click", function() {
    console.log('you have clicked submit');
  //step-1 "Calculate the score as the total of the number of correct answers"
  // Calculate the score
    const calculateScore = () => {
    let score = 0;
    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 6; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector("#" + li);
        radioElement = document.querySelector("#" + r);

        if (quizItem.a == i) {
          //change background color of li element here
          // document.getElementById(`li_${index}_${i}`).style.background = "green"; 
          liElement.style.background = "#32cd32";

        if (radioElement.checked) {
          // code for task 2 goes here
          score ++; 
          console.log(score)
          }
        };
      }
    });
    // put the score on the page after score is calculated
    document.getElementById("score").innerHTML = `Your score is ${score} of out 5!`;
    alert(`Your score is ${score} of out 5!`)
  };
    // call the calculate score function 
    calculateScore(); 

});
});
// step-2 "end"
// step-3 "end"

  // Step-4 "Reload the page when the reset button is clicked (hint: search window.location)"
  const resetButton = document.getElementById("btnReset");
  resetButton.addEventListener("click", function(e) {
      location.reload();
    }); 
  
  //step-4"end"
  