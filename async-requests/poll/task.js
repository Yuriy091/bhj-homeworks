document.addEventListener('DOMContentLoaded', () => {
    const question = document.getElementById('poll__title');
    const answersList = document.getElementById('poll__answers');

    const xhr = new XMLHttpRequest();

    xhr.open('get', ' https://students.netoservices.ru/nestjs-backend/poll', true);

    xhr.onreadystatechange=function() {
        if(xhr.readyState === xhr.DONE) {
            const res = JSON.parse(xhr.responseText);

            setQuestion(res.data.title);
            renderAnswers(res.data.answers);
            initAnswers();
        }
    };

    xhr.send();

    function setQuestion(text) {
        question.innerText = text;
    }

    function renderAnswers(answers) {
        let markup = '';
        markup = answers.reduce((prev, answer) => prev + createAnswerMarkup(answer), '');

        answersList.innerHTML = markup;
    }

    function createAnswerMarkup(answer) {
        return `
        <button class="poll__answer">
            ${answer}
        </button>
        `
    }

    function initAnswers() {
        const answers = Array.from(answersList.querySelectorAll('.poll__answer'));
        answers.forEach(answer => answer.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!')));
    }
});
