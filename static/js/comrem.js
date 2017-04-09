
window.onload=function(){
    		var getfont=function(){
    		
    		var html1=document.documentElement;

    		var screen=html1.clientWidth;

    		html1.style.fontSize=20/375*screen+"px";

    		};
    		getfont();
    	window.onresize=function(){
        			getfont();
        		}
        }