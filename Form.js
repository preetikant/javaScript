function validate()
{
	var name=document.getElementById("name").value;
	var email=document.getElementById("email").value;
	var message=document.getElementById("message").value;
	var validEmail=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if(name=="")
	{
		alert("Please Enter you Name");
		return false;
	}
		else if(email=="")
	{
		alert("Please Enter your Email Address");
		return false;
	}
	else if(validEmail.test(email)==false)
	{
		alert("Please Enter a valid Email Id");
		return false;
	}
	else if(message=="")
	{
		alert("Please your Message");
		return false;
	}
	else
	{
		return true;
	}
	
}