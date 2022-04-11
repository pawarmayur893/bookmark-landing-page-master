console.log("script");

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.form-input.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
