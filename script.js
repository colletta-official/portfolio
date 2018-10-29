var current_img=1;
var imgData;
window.onload=function()
{
	current_img=1;
	imgData=JSON.parse(data);
	for(var i=0;i<8;i++)
	{
		var down=document.getElementById("under_img"+(i+1));
		down.src="img/"+imgData[i].title+".png";
	}
};
