const question = document.getElementById('question-text')
const option1 = document.getElementById('option-1')
const option2 = document.getElementById('option-2')
const option3 = document.getElementById('option-3')
const option4 = document.getElementById('option-4')
kbc_questions = {
    "q1": {
        "question": "What is the capital of India?",
        "options": ["A. Mumbai", "B. Delhi", "C. Kolkata", "D. Chennai"],
        "correct_answer": "B. Delhi"
    },
    "q2": {
        "question": "Who is known as the 'Father of the Nation' in India?",
        "options": ["A. Jawaharlal Nehru", "B. Sardar Patel", "C. Mahatma Gandhi", "D. Subhas Chandra Bose"],
        "correct_answer": "C. Mahatma Gandhi"
    },
    "q3": {
        "question": "Which planet is known as the 'Red Planet'?",
        "options": ["A. Venus", "B. Mars", "C. Jupiter", "D. Saturn"],
        "correct_answer": "B. Mars"
    },
    "q4": {
        "question": "What is the largest mammal on Earth?",
        "options": ["A. Elephant", "B. Blue Whale", "C. Giraffe", "D. Gorilla"],
        "correct_answer": "B. Blue Whale"
    },
    "q5": {
        "question": "In which year did India gain independence?",
        "options": ["A. 1942", "B. 1947", "C. 1950", "D. 1962"],
        "correct_answer": "B. 1947"
    },
}

console.log(option1)

const confirmAnswer = ()=>{
    console.log("correct")
}

const nextQuestion = ()=>{
    console.log("next question")
}
const displayQuestionAndAns = ()=>{
    
    
    question.innerHTML = kbc_questions.q1.question;
    

    for(let i= 0;i<4;i++){
        const optionElement = document.getElementById(`option-${i + 1}`);
        optionElement.innerHTML = kbc_questions.q1.options[i+1];
        // option2.innerHTML = kbc_questions.q1.options[1];
        // option3.innerHTML = kbc_questions.q1.options[2];
        // option4.innerHTML = kbc_questions.q1.options[3];
    }



    console.log(kbc_questions.q1.options[0])
    console.log(option1.textContent)
}


displayQuestionAndAns()