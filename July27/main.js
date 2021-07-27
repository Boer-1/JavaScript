$(document).ready(function(){
	'use strict';
	//如果愿意可删除
	//console.log('main.js loaded');
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));
	
	/*
		//TUDO 案例:一个绿圆
		var c = Shape.Circle(200,200,50);
		c.fillColor = 'green';
	*/
	
	/*
		//自动执行重复任务：画64个圆
		var c;
		for(var x=25;x<400;x+=50){
			for(var y=25;y<400;y+=50){
				c = Shape.Circle(x,y,20);
				c.fillColor = 'green';
			}
		}
	*/
	var c = Shape.Circle(200,200,80);
	c.fillColor = 'black';
	var text = new PointText(200,200);
	text.justification = 'center';
	text.fillColor = 'white';
	text.fontSize = 20;
	text.content = 'hello world';
	var tool = new Tool();
	
	//处理用户输入：每点击一次，在该点画次圆
	tool.onMouseDown = function(event){
		//event的point属性有两个属性 x和y
		/*
		var c = Shape.Circle(event.point,20);
		 */
		var c = Shape.Circle(event.point.x,event.point.y,20);
		c.fillColor = 'green';
	}
	paper.view.draw();
});
