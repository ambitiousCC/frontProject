> # Visual Studio 仿站作业

>># 设计思路
>> 1.html-css-js<br />
2.分离功能区，即部分实现功能后合并
***
>> ### 下拉菜单
* 利用鼠标的onclick事件，同时运用onfocus和onblur实现下拉菜单的切换
* 内部的选项建立在新的盒子中
***

>>## 内容切换按钮
* 给切换内容分类
* 结合css中display和js的点击事件执行内容的切换
***

 ### 接触下拉菜单
* 结合css中display和js的鼠标移除移入执行内容的切换
***

 ### 选项卡
* 利用js动态给元素增加删除css属性
* 利用toggle增加checked
***

 ### 布局
* 分块合并

 ## 困难

 ### 导航栏下拉菜单

>>**合并以后不能实现下拉菜单**<br />
一开始以为是原js代码的问题，（一开始js没怎么学好）然后改js花了许多时间也没实现_**后来我才发现是header部分设置了overflow:hidden属性**<br />
_利用hidden是解决页面中压缩变形的问题_，**不能乱用某一属性例如hidden**
 ### 页面压缩问题
>>一开始使用的是hidden，指标不治本，没什么用。后来我想到可以根据页面的宽来载入不同的css文件<br />

 ## 总结

>* 导航栏：给document加上点击回收时间，给下拉菜单加上点击下拉时间和回收事件并阻止事件冒泡(没有获焦和失焦事件的bug：由于点击次数的不同导致下拉菜单的不收回)
>* 布局：开始时总体的盒子布局居中是对的，之后的布局会在页面压缩以后分散。~~麻烦就不替换整个盒子了~~

>>放进盒子以后设置居中属性

>* 切换卡：

```
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
```

>>* 防止全局变量:var-->let
>>* 利用循环(否则调用一次之后i的值始终为5):存入tabs[i]中，num是新的属性下次调用继续循环

>* 切换页面方法：ajax局部刷新，路由切换页面~~display:none<=>display:block~~
>* 实验室可以看视频教程

