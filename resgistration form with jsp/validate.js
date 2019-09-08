function validate(){
	var name=document.getElementById("textname").value;
	var fathername=document.getElementById("fathername").value;
	var paddress =document.getElementById("paddress").value;
	var personaladdress=document.getElementById("personaladdress").value;
	var city=document.getElementById("city").value;
	var course=document.getElementById("course").value;
	var district=document.getElementById("district").value;
	var state=document.getElementById("state").value;
	var pincode=document.getElementById("pincode").value;
	var emailid=document.getElementById("emailid").value;
	var dob=document.getElementById("dob").value;
	var mobileno=document.getElementById("mobileno").value;
	var sex=document.StudentRegistration.sex;
	var validEmail=/^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if(name==""){
		alert("Please Enter your Name");
		return false;		
	}
	else if(fathername==""){
		alert("Please Enter Your Father Name");
		return false;
	}
	else if(paddress==""){
		alert("Please Enter Your Personal Address");
		return false;
	}
	else if(personaladdress==""){
		alert("Please Enter Your Personal Address");
		return false;
	}
	else if(city==""){
		alert("Please Enter Your Current City");
		return false;
	}
	else if(course==""){
		alert("Please Selsect any Course");
		return false;
	}
	else if(district==""){
		alert("Please Enter Your District Name");
		return false;
	}
	else if(state==""){
		alert("Please Enter Select your state");
		return false;
	}
	else if(pincode==""){
		alert("Please Enter Your Pincode");
		return false;
	}
	else if(emailid==""){
		alert("Please Enter Your Email id");
		return false;
	}
	else if(validEmail.test(emailid)==false){
		alert("Please Enter a valide Email id");
		return false;
		
	}
	else if(dob==""){
		alert("Please Enter Your Date of Birth");
		return false;
	}
	else if(mobileno==""){
		alert("**Please Enter Your Mobile Number");
		return false;
	}
	else if(isNaN(mobileno)){
		alert("**In Mobile Number Only digits are required");
		return false;
	}
	else if(10>mobileno.length){
		alert("**In Mobile Number has only 10 digits");
		return false;
	}
	else if(10<mobileno.length){
		alert("**IN Mobile Number has only 10 digits");
		return false;
	}
	else if((mobileno.charAt(0)!=9) && (mobileno.charAt(0)!=8) && (mobileno.charAt(0)!=7) && (mobileno.charAt(0)!=6)){
		alert("**Mobile Number will start only with 9,7,8,6");
		return false;
	}
	
		
	else{
		return true;
	}
	
}
	

