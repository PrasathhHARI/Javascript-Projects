function increment()
{
    var number=parseInt(document.getElementById('number').innerHTML)
    document.getElementById('number').innerHTML=number+1
}
function decrement()
{
    var number=parseInt(document.getElementById('number').innerHTML)
    document.getElementById('number').innerHTML=number-1
}
function neutral()
{
    document.getElementById('number').innerHTML= 0;
}