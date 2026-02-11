// Quiz/Practice Test JavaScript

const quizQuestions = [
    {question: "What is the formula for MA?", options: ["Load/Effort", "Effort/Load", "VR/Efficiency", "Work In/Work Out"], correct: 0},
    {question: "What is VR for a pulley?", options: ["Load/Effort", "Number of supporting ropes", "Wheel radius/Axle radius", "Length/Height"], correct: 1},
    {question: "Can a machine have 100% efficiency?", options: ["Yes, if well-designed", "No, friction always exists", "Yes, in space", "Only digital machines"], correct: 1},
    {question: "If MA = 3 and VR = 5, efficiency is?", options: ["40%", "60%", "80%", "150%"], correct: 1},
    {question: "VR for wheel & axle (wheel=30cm, axle=5cm)?", options: ["5", "6", "25", "35"], correct: 1},
    {question: "What happens to braking distance if speed doubles?", options: ["Doubles", "Triples", "Quadruples", "Stays same"], correct: 2},
    {question: "Which is active safety?", options: ["Airbags", "ABS", "Seatbelts", "Crumple zones"], correct: 1},
    {question: "Ohm's Law?", options: ["P=VI", "F=ma", "V=IR", "E=mc²"], correct: 2},
    {question: "Four forces of flight - which is NOT one?", options: ["Lift", "Weight", "Friction", "Thrust"], correct: 2},
    {question: "Why triangles in trusses?", options: ["Look nice", "Cheap", "Can't deform without changing sides", "Easy to build"], correct: 2},
    {question: "Stress formula?", options: ["F/A", "ΔL/L₀", "E×ε", "Load/Effort"], correct: 0},
    {question: "Lever with effort arm 50cm, load arm 10cm. VR?", options: ["5", "0.2", "60", "40"], correct: 0},
    {question: "What is moment/torque?", options: ["F×d", "ma", "Work/time", "V×I"], correct: 0},
    {question: "Digital vs analog - which is better for modern comms?", options: ["Analog", "Digital", "Same", "Depends"], correct: 1},
    {question: "Factor of Safety formula?", options: ["MA/VR", "Ultimate Strength/Working Stress", "Load/Effort", "Work Out/Work In"], correct: 1}
];

let userAnswers = [];

function initQuiz() {
    loadQuiz();
}

function loadQuiz() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';
    userAnswers = [];
    
    quizQuestions.forEach((q, i) => {
        const div = document.createElement('div');
        div.className = 'question';
        div.innerHTML = `
            <h4>Question ${i + 1}</h4>
            <p style="font-weight: 600;">${q.question}</p>
            ${q.options.map((opt, j) => `
                <div class="option" onclick="selectAnswer(${i}, ${j})">${opt}</div>
            `).join('')}
        `;
        container.appendChild(div);
    });
    
    // Hide score display
    document.getElementById('score-display').style.display = 'none';
}

function selectAnswer(qIdx, optIdx) {
    const question = document.querySelectorAll('.question')[qIdx];
    const options = question.querySelectorAll('.option');
    
    options.forEach(opt => opt.classList.remove('correct', 'incorrect'));
    userAnswers[qIdx] = optIdx;
    
    if (optIdx === quizQuestions[qIdx].correct) {
        options[optIdx].classList.add('correct');
    } else {
        options[optIdx].classList.add('incorrect');
        options[quizQuestions[qIdx].correct].classList.add('correct');
    }
    
    if (userAnswers.filter(a => a !== undefined).length === quizQuestions.length) {
        showScore();
    }
}

function showScore() {
    const correct = userAnswers.filter((ans, idx) => ans === quizQuestions[idx].correct).length;
    const percentage = Math.round((correct / quizQuestions.length) * 100);
    
    document.getElementById('final-score').textContent = correct;
    document.getElementById('total-questions').textContent = quizQuestions.length;
    document.getElementById('percentage').textContent = percentage;
    document.getElementById('score-display').style.display = 'block';
    
    // Scroll to score
    document.getElementById('score-display').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function resetQuiz() {
    loadQuiz();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
