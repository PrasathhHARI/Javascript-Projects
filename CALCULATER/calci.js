function display(value)
{
   document.getElementById('textarea').value+=value
}
function calculate()
{
    var sol=document.getElementById('textarea').value
    var answer=eval(sol)
    document.getElementById('textarea').value=answer
}
function cls()
{
    document.getElementById('textarea').value=""
}