document.querySelector("#pass").addEventListener("keyup", function(event)
{
    let pwd=document.querySelector("#pass").value;
    let label=document.querySelector("p");
    if(pwd)
    {    
        if(/\d/.test(pwd))
        {
            label.innerHTML="Your password contains numbers.";
        }
        else
        {
            label.innerHTML="No numbers detected";
        }
    }
    else
    {
        label.innerHTML="No password detected";
    }
});