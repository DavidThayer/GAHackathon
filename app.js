let scorecard = [];

let quiz = [
	{
		qtext: "What products will Prop E not regulate",
		options: [
			{
				otext: "Normal cigarettes and cigars",
				isCorrect: true
			},
			{
				otext: "Grape flavored cigarello wrappers",
				isCorrect: false
			},
			{
				otext: "Vape juice",
				isCorrect: false
			},
		]
	}
];

const main = $('main')[0].html();

const loadFeedback = (oindex) => {
	main = '';
	let rightOrWrong = ''
	if (options[oindex].isCorrect) {
		rightOrWrong = 'right';
    } else {rightOrWrong = 'wrong';}
    let points = scorecard.filter(correct => correct).length;
	main.append(`<h1>You got it ${rightOrWrong}!</h1><div class="next"><a href="#">Next Question</a></div><div class="points">You've earned ${points} points so far.</div>`);
	main.firstChild().on('click', (e) => {
		e.preventDefault();
		qindex++;
		if (qindex > 3) {
			loadScore();
		}
		loadQuestion(quizObject, qindex);
	});
}

const loadQuestion = (quizObject, index) => {
	let qindex = index;
	let question = quizObject[index];
	let options = question.options;
	const htmlTemplate = `
	    <div class="question">
	    	<div class="top"></div>
            <div class="qtext">${question.qtext}</div>
            <div class="option"><a href="#" class="${options[0].isCorrect}">${options[0].otext}</a></div>
            <div class="option"><a href="#" class="${options[1].isCorrect}">${options[1].otext}</a></div>
            <div class="option"><a href="#" class="${options[2].isCorrect}">${options[2].otext}</a></div>
        </div>
    	`;
    $('main').append(htmlTemplate);
    $('option').each(oindex => {
    	$(this).on('click', (e, oindex) => {
    		e.preventDefault();
    		loadFeedback(oindex);
    	})
    });
}

const loadScore = () => {}

loadQuestion(quiz, 0);