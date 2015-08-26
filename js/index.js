window.onload=function(){

	var s1=new Top('p2-ul','li','top-hide-div1',1);
	s1.show();
	var s1=new Top('p2-ul','li','top-hide-div2',4);
	s1.show();
	var s1=new Top('p2-ul','li','top-hide-div3',8);
	s1.show();
	var m1=new BarMove('h-small-img',10);
	m1.move();
	var m1=new BarMove('c1-float-bar',10);
	m1.move();
	function showBtn(){
		var oBar=document.getElementById('column1');
		var oImg=document.getElementById('banner-img');
		var oUl=document.getElementById('c1-banner-abtn');
		var aLi=oUl.getElementsByTagName('li');
		var oBarColor=['#008Ef8','#DBDBDB','#FFDCF2','#DBDBDB','#EBEBEB'];
		var i,len=aLi.length;
		var timer=null
		var num=0;
		for(i=0;i<len;i++){
			aLi[i].num=i;
			aLi[i].onmouseover=function(){
				for(var i=0;i<len;i++){
					aLi[i].style.backgroundColor='';	
				}
				clearInterval(timer);
				aLi[this.num].style.backgroundColor='#c40000';
				oImg.src='images-banner/banner00'+(this.num+1)+'.jpg';
				oBar.style.backgroundColor=oBarColor[this.num];
				aLi[this.num].onmouseout=function(){
					//aLi[this.num].style.backgroundColor='';
					set();
				}
			}
		}
		function set(){
			timer=setInterval(function(){
				for(var i=0;i<len;i++){
					aLi[i].style.backgroundColor='';	
				}
				
				if(num==len){
					num=0;
				}	

				aLi[num].style.backgroundColor='#c40000';
				oImg.src='images-banner/banner00'+(num+1)+'.jpg';
				oBar.style.backgroundColor=oBarColor[num];
				num++;	
			},3000)
		};
		set();
	}
	showBtn();
}
function Top(ul,li,div,num){
	this.ul=document.getElementById(ul);
	this.li=document.getElementsByTagName(li)[num];
	this.oDiv=document.getElementById(div)
}
Top.prototype.show=function(){
	var oDiv=this.oDiv;
	this.li.onmouseover=function(){
		this.style.background='#FFF';
		oDiv.style.display='block';
	}
	this.li.onmouseout=function(){
		this.style.background='';
		oDiv.style.display='none';
	}
}
function BarMove(id,target){
	this.obj=document.getElementById(id);
	this.timer=null;
	this.t=target;
}
BarMove.prototype.move=function(){
	var timer=this.timer;
	var num=0;
	this.obj.onmouseover=function(){
		var This=this;
		var t=this.target;
		clearInterval(timer);
		timer=setInterval(function(){
			if(num<=t){
				num++;
			}
			
			This.style.right=num+'px';
			
		},50)
		//console.log(this);
	}
	this.obj.onmouseout=function(){
		var This=this;
		clearInterval(timer);
		timer=setInterval(function(){
			if(num<=0){
				clearInterval(timer);
			}
			num--;
			This.style.right=num+'px';
			
		},50)
	}
}