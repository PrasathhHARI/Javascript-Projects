function validate()
{
    var uname=document.getElementById('username').value;
    var mail=document.getElementById('email').value;
    var pass=document.getElementById('password').value;
    var cpass=document.getElementById('cpassword').value;

    un(uname)
    email(mail)
    psw(pass)
    cpsw(cpass,pass)
}

function un(uname){
    if(uname.length > 7)
    {
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error','success')
        document.getElementById('username-error').innerHTML=" "
    }
    else{
        document.getElementById('username').classList.add('error')
        document.getElementById('username-error').innerText="username must be 8 Letters long"
        
    }

}
function email(mail){
    if(mail.length > 8 && mail.includes("@gmail.com"))
    {
        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('error','success')
        document.getElementById('email-error').innerHTML=" "

    }
    else{
        document.getElementById('email').classList.add('error')
        document.getElementById('email-error').innerText="Email must includes @gmail.com,8 Letters long"
        
    }

}
function psw(pass){
    if(pass.length > 7 && pass.includes("."))
    {
        document.getElementById('password').classList.add('success')
        document.getElementById('password').classList.replace('error','success')
        document.getElementById('password-error').innerHTML=" ";
    }
    else{
        document.getElementById('password').classList.add('error')
        document.getElementById('password-error').innerText="password must be 8 Letters long and includes '.'";
    }

}
function cpsw(cpass,pass){
    if(cpass.length == pass.length && cpass.length!=" ")
    {
        document.getElementById('cpassword').classList.add('success')
        document.getElementById('cpassword').classList.replace('error','success')
        document.getElementById('confirm-error').innerHTML=" ";

    }
    else{
        document.getElementById('cpassword').classList.add('error')
        document.getElementById('confirm-error').innerText="password not matched";
        
    }

}