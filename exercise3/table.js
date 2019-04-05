//Month Arrays -----------------------------------------------------------
var namaa = ["Alderaan","Yavin IV","Hoth","dll"]
var rotation =["24","24","23","dll"]
var orbital = ["364","4818","549","dll"];
var diameter = ["12500", "10200", "7200","dll"];
var climate = ["temperate","temperate, tropical","frozen","dll"]
var gravity = ["1 standard","1 standard", "1,1 standard","dll"]
var terrain =["grasslands, mountains", "jungle, rainforests", "Tundra","dll"]
var terakhir = ["dll"]
//Static content ---------------------------------------------------------
document.write("<table border='1' width='200'>")
document.write("<tr><th>#</th><th>Name</th><th>rotation</th><th>orbital</th><th>diameter</th><th>climate</th><th>gravity</th><th>terrain</th><th>dll</th></tr>");
//Dynamic content --------------------------------------------------------
for(var i=0; i<4;i++)
{
	document.write("<tr><td>" + (i+1) + "</td><td>" + namaa[i] + "</td><td>"+ rotation[i] + "</td><td>"+ orbital[i] + "</td><td>"+ diameter[i] + "</td><td>"+ climate[i] + "</td><td>"+ gravity[i] + "</td><td>" + terrain[i] +"</td></tr>");
}
//Static content  --------------------------------------------------------
document.write("</table>")