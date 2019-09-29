var Question = function(question, answers, correct) {
    this.question = question;
    this.answers = answers
    this.correct = correct;
}

Question.prototype.ask = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
} 

Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
        console.log('That is Correct!');
    } else {
        console.log('Wrong!');
    }
}
 



var first = new Question('Is JavaScript a good language?', ['Yes', 'No'], 0);
var second = new Question('Is the sky blue?', ['Yes', 'No'], 0);
var third = new Question('Who is the Mascot for the Boston Celtics?', ['Wizard', 'Leprechaun', 'Bull', 'Wolf'], 1);
var fourth = new Question('What year was the Internet invented?', ['1941', '1976', '1983', '1992'], 2);

var questions = [first, second, third, fourth];

var n = Math.floor(Math.random() * questions.length);

questions[n].ask();

var answer = parseInt(prompt('Please Select the Correct Answer'));

questions[n].checkAnswer(answer);