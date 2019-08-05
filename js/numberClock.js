let a = ["0 1 2 4 5 6", "2 5", "0 2 3 4 6", "0 2 3 5 6", "1 2 3 5", "0 1 3 5 6", "0 1 3 4 5 6", "0 2 5", "0 1 2 3 4 5 6", "0 1 2 3 5 6"];
let b = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五"];
window.onload = function () {
	showNumberTime();
	setInterval(function () {
		showNumberTime();
	}, 1000);

}
function showNumberTime() {
	let time = new Date;
	let y = time.getFullYear();
	let M = time.getMonth();
	let d = time.getDate();
	let h = time.getHours();
	let m = time.getMinutes();
	let s = time.getSeconds();
	M = M + 1;
	let str = y.toString() + "年"
	if (M < 10){
		str = str + "0" + M.toString() + "月";
	}else{
		str = str + M.toString() + "月";
	}
	if (d < 10) {
		str = str + "0" + d.toString() + "日";
	} else {
		str = str + d.toString() + "日";
	}


	document.getElementById("date").getElementsByTagName("span")[0].innerHTML = str;
	document.getElementById("date").getElementsByTagName("span")[1].innerHTML = b[time.getDay()];
	modiflyNum(1, parseInt(h / 10));
	modiflyNum(2, h % 10);
	modiflyNum(3, parseInt(m / 10));
	modiflyNum(4, m % 10);
	modiflyNum(5, parseInt(s / 10));
	modiflyNum(6, s % 10);
}
function modiflyNum(id, value) {
	let elm = document.getElementById('time' + id.toString()).getElementsByTagName('li');
	let str = a[value];
	let cc = str.split(' ');
	for (let i = 0; i < 7; i++) {
		elm[i].getElementsByTagName('img')[0].src = "images/front.png";
	}
	for (let i = 0; i < cc.length; i++) {
		elm[parseInt(cc[i])].getElementsByTagName('img')[0].src = "images/back.png";
	}
}
