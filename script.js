var current_img=0;
function lefter()
{
	if(current_img>0)
	{
		current_img-=1;
		current_imgLoad();
	}
}
function righter()
{
	if(current_img<7)
	{
		current_img+=1;
		current_imgLoad();
	}
}
function linker(n)
{
	current_img=n-1;
	current_imgLoad();
}
function current_imgLoad()
{
	var viewer=document.getElementById("current_img");
	viewer.src="img/"+imgData[current_img].title+".png";
	viewer.title=imgData[current_img].alt;
	viewer.alt=imgData[current_img].alt;
	var desc=document.getElementById("description");
	desc.innerHTML=imgData[current_img].description;
}
window.onload=function()
{
	current_img=0;
	for(var i=0;i<8;i++)
	{
		var down=document.getElementById("under_img"+(i+1));
		down.src="img/"+imgData[i].title+".png";
		down.title=imgData[i].alt;
		down.alt=imgData[i].alt;
	}
	current_imgLoad();
};
