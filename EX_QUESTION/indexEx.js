function Question(question, answer, correct){
    this.question = question;
    this.answer = answer;
    this.correct = correct;
}

Question.prototype.displayQuestion = function(){
    console.log(this.question);
    for (var i = 0; i < this.answer.length; i++){
        console.log(i + ': ' + this.answer[i]);
    }
}
Question.prototype.checkAnswer = function(ans, callback){
    var s;
    if (ans === this.correct){
        console.log('Correct answer!!!');
        s = callback(true);
    }
    else{
        console.log('Wrong answer!!!');
        s = callback(false);
    }
    this.displayScore(s);
}
Question.prototype.displayScore = function(score){
    console.log('Your current score is: ' + score);
    console.log('----------------------------------')
}

var q1 = new Question('Is JS is the coolest programming language in the world?',['Yes','No'],0);
var q2 = new Question('What is the name of this course\'s teacher?',['Jones','Michael','Jonas'],2);
var q3 = new Question('What is the best describe coding?',['Boring','Hard','Fun','Tedious'],2);
var q = [q1,q2,q3];

function score(){
    var s = 0;
    return function(correct){
        if (correct){
            s++;
        }
        return s;
    }
}

var keepScore = score();

function nextQuestion(){
    var n  = Math.floor(Math.random()* q.length);
    q[n].displayQuestion();

    //Show popup
    var userAnswer = prompt('Please choose your answer.');
    
    if (userAnswer !== 'exit'){
        q[n].checkAnswer(parseInt(userAnswer),keepScore);
        nextQuestion();
    }
}
nextQuestion();