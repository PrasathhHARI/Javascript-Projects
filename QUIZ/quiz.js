var quizdata=[
    {
        question: 'which is framework is realted js',
        a:'.net',
        b:'flask',
        c:'react',
        d:'django',
        correct: 'c'
    },
    {
        question: 'which is not a programming language',
        a:'html',
        b:'python',
        c:'java',
        d:'js',
        correct: 'a'
    },
    {
        question: 'which is not a framework',
        a:'react',
        b:'javascript',
        c:'angular',
        d:'django',
        correct: 'b'
    },
    {
        question: 'CSS stands for',
        a:'cascading style state',
        b:'cascading style sheet',
        c:'cascading sheet of style',
        d:'none',
        correct: 'b'
    }
]

var quiz = document.getElementById('quiz')
var answer= document.querySelectorAll('.answer')
var question= document.getElementById('question')
var option_a=  document.getElementById('a_value')
var option_b=  document.getElementById('b_value')
var option_c=  document.getElementById('c_value')
var option_d=  document.getElementById('d_value')
var submitbtn=  document.getElementById('submit')

var quizscore=0
var questionnumber=0

loadquiz()

function loadquiz()
{
    deselect()
    
    question.innerHTML=quizdata[questionnumber].question
    option_a.innerHTML=quizdata[questionnumber].a
    option_b.innerHTML=quizdata[questionnumber].b
    option_c.innerHTML=quizdata[questionnumber].c
    option_d.innerHTML=quizdata[questionnumber].d

}

function deselect()
{
    answer.forEach(answer=>answer.checked=false)
}

submitbtn.addEventListener('click',()=>{
    var checkanswer;

    answer.forEach(answer=>{
    if(answer.checked)
    {
        checkanswer=answer.id;
        
    }
})
    if(checkanswer==quizdata[questionnumber].correct)
    {
        quizscore=quizscore+1;
    }
    questionnumber=questionnumber+1;
    console.log(questionnumber)
    console.log(quizscore)
    if(questionnumber==quizdata.length)
    {
        document.getElementById('quizdiv').innerHTML=`<h1 style="color:green;font-size:46px;text-align:center;margin-top:20px">you scored ${quizscore} out of ${quizdata.length}</h1>` 
    }
    else{
        loadquiz()
    }

})