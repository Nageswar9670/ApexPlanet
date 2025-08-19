const answers = {
  q1: 'b',
  q2: 'b',
  q3: 'c',

};

document.getElementById('submitQuiz').addEventListener('click', function () {
  let score = 0;
  const totalQuestions = Object.keys(answers).length;

  for (const question in answers) {
    const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
    if (selectedOption && selectedOption.value === answers[question]) {
      score++;
    }
  }

  const resultElement = document.getElementById('quizResult');
  resultElement.innerHTML = `
    <p>You scored ${score} out of ${totalQuestions}!</p>
    <p>${getQuizFeedback(score, totalQuestions)}</p>
  `;
});

function getQuizFeedback(score, total) {
  const percentage = (score / total) * 100;
  if (percentage >= 80) {
    return '🎉 Excellent job! You know your DSA basics well.';
  } else if (percentage >= 50) {
    return '👍 Good effort! Review some concepts and try again.';
  } else {
    return '📘 Keep practicing! AI concepts take time to understand.';
  }
}

document.getElementById('fetchJoke').addEventListener('click', function () {
  const jokeDisplay = document.getElementById('jokeDisplay');
  jokeDisplay.textContent = 'Loading joke...';

  fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.error) {
        jokeDisplay.textContent = 'Could not fetch joke. Please try again.';
      } else {
        jokeDisplay.textContent = data.joke;
      }
    })
    .catch(error => {
      jokeDisplay.textContent = 'Failed to fetch joke: ' + error.message;
    });
});