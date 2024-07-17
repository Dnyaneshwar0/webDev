document.querySelector("#pass").addEventListener("keyup", function(event)
{
    let pwd=document.querySelector("#pass").value;
    let label=document.querySelector("p");
    if(pwd)
    {
        if(pwd.length>=8)
        {
            if(!(/\d/.test(pwd)))
            {
                label.innerHTML="Please add atleast one number.";
            }
            else
            {
                if(!(/[A-Z]/.test(pwd)))
                {
                    label.innerHTML="Please add atleast one Uppercase Letter [A-Z]"
                }
                else
                {
                    if(!(/[!@#$%^&*_]/.test(pwd)))
                    {
                        label.innerHTML="Please add atleast one Special Character"
                    }
                    else
                    {
                        label.innerHTML="Password acceptable."
                    }
                }
            }
        }
        else
        {
            label.innerHTML="Please enter atleast 8 characters."
        }
    }
    else
    {
        label.innerHTML="No password detected";
    }
});