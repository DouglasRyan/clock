let canvas = document.getElementById('canvas');//画布
let hb = canvas.getContext('2d');//2D画板
let numBack = canvas.getContext('2d');//2D画板,表盘数字
let binBack = canvas.getContext('2d');//2D画板，表盘指针
let seconds = 0
let minutes = 0;
let hours = 0;


//初始化画布，生成基本样式
initClock()
//保存基本样式
let imgData = hb.getImageData(0, 0, 400, 400);
//初次渲染画布
drawPin()
//每隔一秒，重新渲染画布
setInterval(()=>{
    //hb.translate(200, 200)
    hb.clearRect(-200,-200,400,400)
    hb.translate(0, 0)
    hb.putImageData(imgData,0,0);
    drawPin()
},1000)

//封装函数

//初始化
function initClock(){
    //设置表盘数字
    setNum()
    hb.translate(200, 200)
    setClockLayout()
    //指针盘
    pin()
}
// 获取时间，小时，分钟，秒
function showTime() {
    let now = new Date();
    let hrs = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let mil = now.getMilliseconds();
    let smoothsec = sec + (mil / 1000);
    let smoothmin = min + (smoothsec / 60);
    let hour = hrs + (smoothmin / 60);
    seconds = smoothsec;
    minutes = smoothmin;
    hours = hour;
}
//表盘
//设置表盘数字
function setNum() {
    numBack.save();
    numBack.translate(200, 200);
    numBack.beginPath();
    numBack.fillStyle = '#000';
    numBack.font = "15px Helvetica";
    for (var i = 0; i < 60; i++) {
        if (i % 5 == 0) {
            numBack.lineWidth = 5;
            var xPoint = Math.sin(i * 6 * 2 * Math.PI / 360) * 90;
            var yPoint = -Math.cos(i * 6 * 2 * Math.PI / 360) * 90;
            numBack.fillText(
                i === 0 ? 12 : i / 5,
                i === 0 ? -10 : xPoint - 5,
                i === 0 ? -85 : i <= 30 ? yPoint + 5 : yPoint + 10
            );
        }
    }
    numBack.stroke();
    numBack.closePath();
    numBack.restore();
}
//设置表盘布局
function setClockLayout() {
    //分钟刻度
    for (let i = 0; i < 60; i++) {
        hb.beginPath()
        hb.strokeStyle = '#A3A3A3'
        hb.lineWidth = 3
        hb.moveTo(115, 0)
        hb.lineTo(120, 0)
        hb.stroke()
        hb.rotate(Math.PI / 30)   //每6deg画一个分钟刻度线
        hb.closePath()
    }
    //时钟刻度
    for (let i = 0; i < 12; i++) {
        hb.beginPath()
        hb.strokeStyle = '#666666'
        hb.lineWidth = 5
        hb.moveTo(100, 0)
        hb.lineTo(120, 0)
        hb.stroke()
        hb.rotate(Math.PI / 6)    //每个30deg画一个时钟刻度线    
        hb.closePath()
    }
    //内表盘
    hb.beginPath()
    hb.strokeStyle = '#B70D0D'
    hb.arc(0, 0, 124, 0, Math.PI * 2);
    hb.lineWidth = 5
    hb.stroke()
    hb.closePath()
    //外表盘
    hb.beginPath()
    hb.strokeStyle = 'red'
    hb.arc(0, 0, 129, 0, Math.PI * 2);
    hb.lineWidth = 6
    hb.stroke()
    hb.closePath()
}
//指针
//指针盘
function pin() {
    hb.fillStyle = "#EA887A"
    hb.beginPath()
    hb.arc(0, 0, 9, 0, 2 * Math.PI)
    hb.closePath()
    hb.fill()
    //
    hb.fillStyle = "#EEB8B0"
    hb.beginPath()
    hb.arc(0, 0, 6, 0, 2 * Math.PI)
    hb.closePath()
    hb.fill()
    //
    hb.fillStyle = "#C44A3D"
    hb.beginPath()
    hb.arc(0, 0, 3, 0, 2 * Math.PI)
    hb.closePath()
    hb.fill()
}



//生成指针
function drawPin() {
    showTime()
    //秒针
    drawSecPin()
    // 分针
    drawMinPin()
    // 时针
    drawHourPin()
}
// 秒针指针
function drawSecPin() {
    binBack.save();
    binBack.rotate(seconds / 60 * 2 * Math.PI - Math.PI / 2);
    binBack.beginPath();
    binBack.fillStyle = '#DE6857';
    binBack.lineWidth = 2;
    binBack.lineJoin = "bevel";
    binBack.miterLimit = 10;
    binBack.moveTo(8, -1);
    binBack.lineTo(8, 1);
    binBack.lineTo(75, 1);
    binBack.lineTo(75, 5);
    binBack.lineTo(80, 0);
    binBack.lineTo(75, -5);
    binBack.lineTo(75, -1);
    binBack.fill();
    binBack.closePath();
    binBack.restore();
}
// 分针指针
function drawMinPin() {
    binBack.save();
    binBack.rotate(minutes * 6 * Math.PI / 180);
    binBack.beginPath();
    binBack.fillStyle = '#666665';
    binBack.lineWidth = 1;
    binBack.lineJoin = "bevel";
    binBack.miterLimit = 10;
    binBack.moveTo(-2, -9);
    binBack.lineTo(2, -9);
    binBack.lineTo(2, -70);
    binBack.lineTo(8, -70);
    binBack.lineTo(-8, -70);
    binBack.lineTo(-2, -70);
    binBack.lineTo(-2, -9);
    binBack.fill();
    binBack.closePath();
    binBack.restore();
}
// 时针指针
function drawHourPin() {
    binBack.save();
    binBack.rotate(hours * 30 * Math.PI / 180);
    binBack.beginPath();
    binBack.fillStyle = '#666665';
    binBack.lineWidth = 1;
    binBack.lineJoin = "bevel";
    binBack.miterLimit = 10;
    binBack.moveTo(-2, -9);
    binBack.lineTo(2, -9);
    binBack.lineTo(2, -65);
    binBack.lineTo(8, -65);
    binBack.lineTo(-8, -65);
    binBack.lineTo(-2, -65);
    binBack.lineTo(-2, -9);
    binBack.fill();
    binBack.closePath();
    binBack.restore();
}
