const StartBtn = document.querySelector(".start-btn");
const QuizContent = document.querySelector(".content");

function HideBtn() {
  StartBtn.classList.add("hide");
  QuizContent.classList.add("show");
}

const QuesAns = [
  {
    Question: "What is the brain of computer?",
    Answer: "A",
    choices: ["A. Cpu", "B. Memory", "C. hdd", "D. Keyboard"],
  },

  {
    Question: "What is html?",
    Answer: "A",
    choices: [
      "Hypertext markup language",
      "Hi ta mahal kita",
      "Hypertension manage language",
      "Hapsay Tae Mali Lang",
    ],
  },

  {
    Question: "What is the main tools to compile code?",
    Answer: "B",
    choices: ["Coffe Cup", "Vscode", "Computer", "Paper"],
  },

  {
    Question: "What is the color of Vscode?",
    Answer: "B",
    choices: ["Blue", "sky Blue", "Violet", "Pink"],
  },

  {
    Question: "Unsa akoong pangalan?",
    Answer: "C",
    choices: ["John doe", "Alvert", "John Alvert", "Marbs"],
  },
];

const Question = document.querySelector("#Question");
const AnswerField = document.querySelector("#ans-field");
const SubmitBtn = document.querySelector(".submit");
const Choices = document.querySelector(".ans-choice");
const modal = document.querySelector('.modal');
const nextBtn = document.querySelector('.next-btn');
const Ans = document.querySelector('.answer-verify');

function OpenModal(){

    modal.classList.add('show');
     nextBtn.addEventListener('click',closeModal);
}

function closeModal(){

    modal.classList.remove('show');

}


  let index = 0;
function SubmitAns() {


    let AnswerFieldValue = AnswerField.value;

    if(AnswerFieldValue == "" ){

        alert('Please Eneter your Answer before Submiting')
       

    }else{

        
        OpenModal();

        if(AnswerField.value === QuesAns[index].Answer){

            Ans.innerHTML = 'Your Answer is Correct'
            nextBtn.innerHTML = 'Next Question';

           
            
        }else{

               Ans.innerHTML = 'Your Answer is Incorrect'
               nextBtn.innerHTML = 'Try Again';
        }
    }


}

SubmitBtn.addEventListener('click',SubmitAns);





function NextQuestion() {

 
 index++;


      


        SubmitAns();
        Questions();

}



function Questions() {

 
  Question.innerHTML = QuesAns[index].Question;

  QuesAns[index].choices.forEach((item) => {
    const li = document.createElement("li");
    const span = document.createElement("span");

    Choices.appendChild(li);
    li.appendChild(span);

    span.innerHTML = item;
  });
}


nextBtn.addEventListener('click',NextQuestion);
StartBtn.addEventListener("click", HideBtn);
StartBtn.addEventListener("click", Questions);
