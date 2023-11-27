var nav=0;
function clicknav()
{
    if(!nav)
    {
        $(".mainnav").css('width','100%')
        $('li').css('display','block')
        nav=1;
    }
    else
    {
        $(".mainnav").css('width','0')
        $('li').css('display','none')
        nav=0;
    }
}