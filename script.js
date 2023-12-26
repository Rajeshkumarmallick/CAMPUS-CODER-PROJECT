function calculateScore() {
    const form = document.getElementById('quiz-form');
    const resultContainer = document.getElementById('result-container');
    const scoreElement = document.getElementById('score');
    const feedbackElement = document.getElementById('feedback');

    let score = 0;

    // Check answers
    const answers = {
        q1: 'paris',
        q2: 'mars',
        q3: 'bluewhale',
    };

    for (const question in answers) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer) {
            if (selectedAnswer.value === answers[question]) {
                score++;
            }
        } else {
            alert('Please answer all questions before submitting.');
            return;
        }
    }

    // Display results
    scoreElement.textContent = `You scored ${score} out of 3.`;

    if (score === 3) {
        feedbackElement.textContent = 'Congratulations! You got all the answers right.';
    } else if (score >= 1) {
        feedbackElement.textContent = 'Good job! You got some answers right.';
    } else {
        feedbackElement.textContent = 'Better luck next time. Try again!';
    }

    // Show result container
    resultContainer.style.display = 'block';
}
