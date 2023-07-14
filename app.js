function change()
{
    var imag=document.getElementById("bulb");
    if(imag.src.match("off"))
    {
        imag.src="./assets/bulb on.jpeg";
    }
    else
    {
        imag.src="./assets/bulb off.jpeg";
    }
}