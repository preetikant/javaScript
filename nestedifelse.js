var dressColor="black";
var vipPass="no";
var simplePass="no";

if(dressColor=="blue")
{
	if(vipPass=="yes")
	{
		document.write("<br \><br \>");
		document.write("<h1>You sit on golden chair</h1>");
	}
	else{
		if(simplePass=="yes")
		{
			document.write("<br \><br \>");
			document.write("<h2>You sit on simple chair</h2>");
		}
		else
		{
			document.write("<br \><br \>");
			document.write("<p>you have don't pass so you can't attend party</p>");
		}
	}
}
else{
	document.write("<br \><br \>");
	document.write("<h2>you dressColor is not blue so u can't atttend party</h2>");
}