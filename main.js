const pressed = document.querySelector('.join-button-link');

pressed.addEventListener('click', onClick);

function onClick(event)
{
    event.preventDefault();
    const email = document.querySelector('.email-input');
    const valid =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function clear()
    {
        document.querySelector('.error').innerHTML = "";
    }

    if(!valid.test(email.value))
    {
        
        document.querySelector('.error').innerHTML = "Please, fill the field correctly as in the shown example!  ";
        setTimeout(clear, 2500);
    }
    else 
    {
        console.log("success");
    }
}
