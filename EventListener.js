function grayColor()
{
	document.getElementById("txt").style.backgroundColor="gray";	
}
document.getElementById("txt").addEventListener("focus",grayColor);
function hello()
{
document.getElementById("txt").style.backgroundColor="yellow";	
}
document.getElementById("txt").addEventListener("focusout",hello);