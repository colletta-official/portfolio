var current_img=1;
var imgData;
function lefter()
{
	if(current_img>1)
	{
		current_img-=1;
	}
}
function righter()
{
	if(current_img<8)
	{
		current_img+=1;
	}
}
function linker(n)
{
	current_img=n;
}
window.onload=function()
{
	current_img=1;
//	imgData=JSON.parse(data);
	for(var i=0;i<8;i++)
	{
		var down=document.getElementById("under_img"+(i+1));
		down.src="img/"+imgData[i].title+".png";
	}
};
