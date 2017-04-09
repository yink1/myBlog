

//默认为16rem
/*!function(){
	var desW = 640,
	winW = document.documentElement.clientWidth,
	ratio = winW / desW,
	oMain = document.querySelector('.main');
	if(winW>desW){
		oMain.style.margin = '0 auto';
		oMain.style.width = desW +'px';
		return;
	}
	window.onresize=function(){
		document.documentElement.style.fontSize = ratio*100+'px';
	}
	
}()*/
/*window.onload=function(){
    		var getfont=function(){
    		
    		var html1=document.documentElement;

    		var screen=html1.clientWidth;

    		html1.style.fontSize=0.0685*screen+"px";

    		}
    	window.onresize=function(){
        			getfont();
        		}
        }*/
        /*https://github.com/yink1/myBlog/settings/pages/themes?utf8=✓&source=master*/