var text=["It was a rainy <br> night","when his first cry <br> was heard ....","Well it's not a tale","It's just a bio of <br> a lazy house of fat.","Now go ahead . <br> Check his page ","Why are u still here? <br> GOOO--", "I cann't help.<br> Rewatch then..."];
var images=["rain.gif","g2.gif","g3.gif","g4.gif","g5.gif","g6.gif","g7.gif"];
var next=0;
function slide(){
	document.getElementById("irot").innerHTML=text[next];
	document.getElementById("imro").src=images[next];
	next=next+1;

	if (next >6)
	{
		next=0;
	}
}

window.setInterval(slide,5000);
