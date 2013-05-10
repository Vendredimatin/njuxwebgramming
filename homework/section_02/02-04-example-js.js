function onMouseOver1() {
//JavaScript函数， function 为关键字，定义此为一个函数，onMouseOver1()是函数名,'{'表示函数开始

	var div1 = document.getElementById("divMenu1");
    //获取id等于'divMenu1'的标签，并把获取的对象赋给'div1'，括号里面的'divMenu1'是ID，它要和source.html中的<div>的ID一致

	var div2 = document.getElementById("div12");
	//获取div"div12"，把他赋值给div2
	
	div1.style.display = "block";
	//"block"设置显示div1的边框,"none"为不显示
	
	div2.style.display = "block";
	//设置显示div2的边框。

}
//'}'表示函数结束

function onMouseOut1() {
//JavaScript函数， function 为关键字，定义此为一个函数，onMouseOut()是函数名,'{'表示开始

	var div1 = document.getElementById("divMenu1");
	//获取div"divMenu1"，把他赋值给div1。
	
	var div2 = document.getElementById("div12");
	//获取div"div12"，把他赋值给div2。
	
	div1.style.display = "none";
	//设置隐藏div1的边框。
	
	div2.style.display = "none";
	//设置隐藏div2的边框。

}
//'}'表示函数结束

function onMouseOver2() {
//JavaScript函数， function 为关键字，定义此为一个函数，onMouseOver2()是函数名,'{'表示函数开始

	var div1 = document.getElementById("divMenu2");
	//获取div"divMenu2"，把他赋值给div1。

	var div2 = document.getElementById("div22");
	//获取div"div22"，把他赋值给div2。

	div1.style.display = "block";
	//设置显示div2的边框。

	div2.style.display = "block";
	//设置显示div2的边框。

}
//'}'表示函数结束

function onMouseOut2() {
//JavaScript函数， function 为关键字，定义此为一个函数，onMouseOut2()是函数名,'{'表示函数开始

	var div1 = document.getElementById("divMenu2");
	//获取div"divMenu2"，把他赋值给div1。

	var div2 = document.getElementById("div22");
	//获取div"div22"，把他赋值给div2。

	div1.style.display = "none";
	//设置隐藏div1的边框。

	div2.style.display = "none";
	//设置隐藏div2的边框。

}
