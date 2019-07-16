//导航栏部分代码
document.getElementById('lists0').getElementsByTagName('li')[0].style.marginLeft = '20px';
document.getElementById('nav-inner-right-0-list-0-dropdown-list-1').getElementsByTagName('div')[0].style.marginLeft =
	'20px';
document.getElementById('nav-dropdown-b').getElementsByTagName('div')[0].style.marginLeft = '20px';

//特殊的按钮
function spaOn() {
	"use strict";
	var spaCss = document.getElementById('nav-inner-right-0-list2').getElementsByTagName('a')[0];
	spaCss.style.cssText = "color:blue;" + "-webkit-transition:.5s;";
}

function spaOver() {
	"use strict";
	var spaCss = document.getElementById('nav-inner-right-0-list2').getElementsByTagName('a')[0];
	spaCss.style.cssText = "color:black;";
}

//无下拉菜单的下划线样式
var disdropBtn = document.getElementsByClassName("disdropbtn");
var disdropBtnsp = document.getElementById("disdropbtn_sp");
for (var i = 0; i < disdropBtn.length; i++) {
	changeDec(disdropBtn[i]);
}

var disdropBtnlista = document.getElementsByClassName("nav_dropdown_content_a");

for (var i = 0; i < disdropBtnlista.length; i++) {
	changeDec(disdropBtnlista[i]);
}
changeDec(disdropBtnsp);

var navList3a = document.getElementsByClassName("lists3_a");
var navList4a = document.getElementsByClassName("lists4_a");
for (var i = 0; i < navList3a.length; i++) {
	changeAll(navList3a[i]);
}
for (var i = 0; i < navList4a.length; i++) {
	changeAll(navList4a[i]);
}

function changeDec(obj) {
	"use strict";
	obj.onmouseout = function() {
		this.style.textDecoration = "none";
	};
	obj.onmouseover = function() {
		this.style.textDecoration = "underline";
	};
}

function changeAll(obj) {
	"use strict";
	obj.onmouseout = function() {
		this.style.textDecoration = "none";
		this.style.backgroundColor = "#f2f2f2";
	};
	obj.onmouseover = function() {
		this.style.textDecoration = "underline";
		this.style.webkitTransition = ".5s";
		this.style.backgroundColor = "#E6E6E6";
	};
}
//导航栏点击下拉菜单
/* 点击按钮，下拉菜单在 显示/隐藏 之间切换 */
function showList(obj) {
	"use strict";
	var next = obj.nextElementSibling;
	next.classList.toggle('show');
}

function colorsBtn(obj) {
	"use strict";
	obj.style.backgroundColor = "#F2F2F2";
	obj.style.boxShadow = "0px 1px 10px 1px gray";
	obj.style.textDecoration = "underline";
}

function colorsBtns(obj) {
	"use strict";
	obj.style.backgroundColor = "#fff";
	obj.style.textDecoration = "none";
	obj.style.boxShadow = "none";
	var next = obj.nextElementSibling;
	next.classList.toggle('show');
}

function changePo(obj) {
	"use strict";
	obj.onmouseout = function() {
		this.style.cursor = "none";
	};
	obj.onmouseover = function() {
		this.style.cursor = "pointer";
	};
}
//接触下拉菜单
function onBtn(obj) {
	"use strict";
	obj.onmouseover = function() {
		this.style.backgroundColor = "#0067B8";
		this.style.color = "white";
		this.style.webkitTransition = ".5s";
	};
	obj.onmouseout = function() {
		this.style.backgroundColor = "white";
		this.style.color = "black";
	};
}

var mouseonBtn = document.getElementsByClassName("onBtn");
for (var i = 0; i < mouseonBtn.length; i++) {
	onBtn(mouseonBtn[i]);
}

var onMainbtn = document.getElementById("header-inner-content-guilde-dropdown");
var onMain_target = document.getElementById("header-inner-content-guilde-dropdown-list");

function onMain() {
	"use strict";
	onMainbtn.onmouseover = function() {
		onMain_target.style.display = "block";
	};
	onMainbtn.onmouseout = function() {
		onMain_target.style.display = "none";
	};
}
onMain();
//切换按钮代码
//功能切换
function gr(s1, s2) {
	"use strict";
	var x = document.querySelectorAll(s1);
	var y = document.querySelectorAll(s2);

	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'block';
	}
	for (i = 0; i < y.length; i++) {
		y[i].style.display = 'none';
	}
}

//颜色切换
var colors = document.getElementsByClassName("colorchange");

function reColor(ind) { //循环中嵌入监听事件
	"use strict";
	return function() {
		addClass(this, "active");
		var sib = siblings(this);
		for (var j = 0; j < sib.length; j++) {
			removeClass(sib[j], "active");
		}
	};
}
for (var i = 0; i < colors.length; i++) {
	changePo(colors[i]);
	colors[i].addEventListener("click", reColor(i), false);
}

//按钮样式函数
function addClass(obj, name) {
	"use strict";
	obj.className = obj.className + " " + name;
}

//获取另一个按钮
function siblings(obj) {
	"use strict";
	var sibArr = obj.parentNode.children;
	var sibNewArr = [];
	for (var i = 0; i < sibArr.length; i++) {
		if (sibArr[i] !== obj) {
			sibNewArr.push(sibArr[i]);
		}
	}
	return sibNewArr;
}

//删除未点击按钮样式函数
function removeClass(obj, name) {
	"use strict";
	var classStr = obj.className;
	var classArr = classStr.split(" ");
	var classNewArr = [];
	for (var i = 0; i < classArr.length; i++) {
		if (classArr[i] !== name) {
			classNewArr.push(classArr[i]);
		}
	}
	obj.className = classNewArr.join(" ");
}

// 防止大佬缩放页面
document.addEventListener('keydown', function(event) {
	"use strict";
	if ((event.ctrlKey === true || event.metaKey === true) &&
		(event.which === 61 || event.which === 107 || event.which === 173 || event.which === 109 || event.which === 187 ||
			event.which === 189)
	) {
		event.preventDefault();
	}
}, false);
document.addEventListener('DOMMouseScroll', function(event) {
	"use strict";
	if (event.ctrlKey === true || event.metaKey) {
		event.preventDefault();
	}
}, false);
document.addEventListener('mousewheel', function(event) {
	"use strict";
	if (event.ctrlKey === true || event.metaKey) {
		event.preventDefault();
	}
}, false);

// 选项卡部分代码
function Tabs(tabs_name, contents_name, tabs_checked_style, contents_checked_style) {
	"use strict";
	var tabs = document.querySelectorAll(tabs_name),
		contents = document.querySelectorAll(contents_name),
		e_mark = 0;
	for (var i = 0, len = tabs.length; i < len; i++) {
		tabs[i].num = i;
		tabs[i].onclick = function() {
			tabs[e_mark].classList.toggle(tabs_checked_style);
			tabs[this.num].classList.toggle(tabs_checked_style);
			contents[e_mark].classList.toggle(contents_checked_style);
			contents[this.num].classList.toggle(contents_checked_style);
			e_mark = this.num;
		};
	}
}

//下载按钮
function downloadBtn(obj) {
	"use strict";
	obj.onmouseover = function() {
		this.style.backgroundColor = "#0060AC";
		this.style.webkitTransition = ".5s";
	};
	obj.onmouseout = function() {
		this.style.backgroundColor = "#0067B8";
	};
}
var downBtn = document.getElementsByClassName("downloadBtn");
for (var i = 0; i < downBtn.length; i++) {
	downloadBtn(downBtn[i]);
}

//底部
function bottonA(obj) {
	"use strict";
	obj.onmouseover = function() {
		this.style.textDecoration = "underline";
		this.style.color = "black";
		this.style.webkitTransition = ".5s";
	};	
	obj.onmouseout = function() {
		this.style.textDecoration = "none";
		this.style.color = "#616161";
	};

}

var bottonLink0 = document.querySelectorAll(".footer-menu-inners a");
var bottonLink1 = document.querySelectorAll("#footer-bottonnav-inner-nav-list a");

for (var i = 0; i < bottonLink0.length; i++) {
	bottonA(bottonLink0[i]);
}
for (var i = 0; i < bottonLink1.length; i++) {
	bottonA(bottonLink1[i]);
}

//特殊的切换器
var lgChange = document.querySelectorAll("#footer-bottonnav-inner-Language p");
for (var i = 0; i < lgChange.length; i++) {
	changePo(lgChange[i]);
}

window.onload = function main() {
	"use strict";
	Tabs(".main-conclumn-inner-content-shop-list-item-X", ".main-conclumn-inner-contents-X",
		"main-conclumn-inner-content-shop-list-item-X-checked", "main-conclumn-inner-content-X-checked");
	Tabs(".main-conclumn-inner-content-shop-list-item-Y", ".main-conclumn-inner-contents-Y",
		"main-conclumn-inner-content-shop-list-item-Y-checked", "main-conclumn-inner-content-Y-checked");

};

// 点击下拉菜单意外区域隐藏
window.onclick = function(event) {
	"use strict";
	if (!event.target.matches('.nav-dropbtn')) {
		var dropdowns = document.getElementsByClassName("nav-dropdown-content");
		for (var i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
};
