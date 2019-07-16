//获取标签边框
var box = my$("box-ph");
var inner = box.children[0];
var imgWidth = inner.offsetWidth;
var divObj = inner.children[0];
var list = divObj.children;
var olObj = inner.children[1];
var arr = my$("arr");
var pic = 0; //给pic赋值，全局变量
//创建底部按钮
for (var i = 0; i < list.length; i++) {//根据ul中li的个数创立底部按钮个数
	var liObj = document.createElement("li");
	olObj.appendChild(liObj);
	liObj.innerHTML = (i + 1);
	//在li标签中创立自定义值并存储
	liObj.setAttribute("index", i);
	//鼠标点击事件
	liObj.onclick = function() {
		for (var j = 0; j < olObj.children.length; j++) {
			olObj.children[j].removeAttribute("class");
		}
		//设置当前鼠标自定义值
		this.className = "current";
		//获取鼠标点击时的li的自定义值
		pic = this.getAttribute("index");
		//移动轮播框架
		animate(divObj, -pic * imgWidth);
	};
}
olObj.children[0].className = "current";
//创建“第六个轮播图”
divObj.appendChild(divObj.children[0].cloneNode(true));
//自动播放轮播图！！！
var timeId = setInterval(clickHandle, 6000);
box.onmouseover = function() {
	//鼠标进入停止播放
	clearInterval(timeId);
};
box.onmouseout = function() {
	//鼠标离开继续播放
	timeId = setInterval(clickHandle, 6000);
};
//右边按钮
my$("right").onclick = clickHandle;
function clickHandle() {
	if (pic == list.length - 1) {
		pic = 0; //重新设置pic的值为0
		divObj.style.left = 0 + "px"; //把ul归位
	}
	pic++;//归位后播放，每次按照图片的宽与出去图片的个数确定动画效果
	animate(divObj, -pic * imgWidth);
	if (pic == list.length - 1) {
		olObj.children[olObj.children.length - 1].className = "";
		olObj.children[0].className = "current";
	} else {//细节,小按钮的背景颜色设置
		for (var i = 0; i < olObj.children.length; i++) {
			olObj.children[i].removeAttribute("class");
		}
		olObj.children[pic].className = "current";
	}

};
//左边按钮
my$("left").onclick = function() {
	if (pic == 0) {
		pic = 5;
		divObj.style.left = -pic * imgWidth + "px";
	}
	pic--;
	animate(divObj, -pic * imgWidth);
	for (var i = 0; i < olObj.children.length; i++) {
		olObj.children[i].removeAttribute("class");
	}
	//当前的自定义值对应的按钮设置颜色
	olObj.children[pic].className = "current";

};

//设置任意的一个元素,移动到指定的目标位置
function animate(element, target) {
	clearInterval(element.timeId);//定时器
	element.timeId = setInterval(function() {
		//获取当前的位置
		var current = element.offsetLeft;
		//每次移动的距离
		var step = 200;
		step = current < target ? step : -step;
		//当前移动到位置
		current += step;
		if (Math.abs(current - target) > Math.abs(step)) {
			element.style.left = current + "px";
		} else {
			//清理定时器
			clearInterval(element.timeId);
			//直接到达目标
			element.style.left = target + "px";
		}
	}, 10);
}
