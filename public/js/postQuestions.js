const allQuestions = document.getElementById('all-question');
const correctAnswer = document.querySelector('.options');
const options = document.getElementsByTagName('option');

// const correctAnswerData = document.createElement('select');
//     correctAnswerData.name = `q${index}correctAnswer`;




for(let i = 1; i <= 4; i++) {
//    const options = document.createElement('option');
   options.value = `Option ${i}`;
   options.textContent = `Option ${i}`;
   correctAnswer.appendChild(options);
};

const answer = correctAnswer.value;

allQuestions.style.fontSize = "100px" 