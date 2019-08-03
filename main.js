let canvas = document.getElementById('canvas');//画布
let hb = canvas.getContext('2d');//2D画板
let numBack = canvas.getContext('2d');//2D画板
let binBack = canvas.getContext('2d');//2D画板
let minBack = canvas.getContext('2d');//2D画板

setNum()


hb.translate(200, 200)

//生成指针
//指针圆心
pin()
function pin() {
    hb.fillStyle = "#EA887A"
    hb.beginPath()
    hb.arc(0, 0, 9, 0, 2 * Math.PI)
    hb.closePath()
    hb.fill()

    hb.fillStyle = "#EEB8B0"
    hb.beginPath()
    hb.arc(0, 0, 6, 0, 2 * Math.PI)
    hb.closePath()
    hb.fill()

    hb.fillStyle = "#C44A3D"
    hb.beginPath()
    hb.arc(0, 0, 3, 0, 2 * Math.PI)
    hb.closePath()
    hb.fill()
}
//秒针

drawSecPin()
function drawSecPin() {
    binBack.save();
    binBack.beginPath();
    binBack.strokeStyle = '#DE6857';
    binBack.lineWidth = 1;
    binBack.lineJoin = "bevel";
    binBack.miterLimit = 10;
    binBack.moveTo(8, -1);
    binBack.lineTo(8, 1);
    binBack.lineTo(70, 1);
    binBack.lineTo(70, 5);
    binBack.lineTo(80, 0);
    binBack.lineTo(70, -5);
    binBack.lineTo(70, -1);
    binBack.lineTo(8, -1);
    binBack.fill();
    binBack.closePath();
    binBack.restore();
}


// //分针
drawMinPin()
function drawMinPin() {
    binBack.save();
    binBack.beginPath();
    binBack.fillStyle = '#666665';
    binBack.lineWidth = 1;
    binBack.lineJoin = "bevel";
    binBack.miterLimit = 10;
    binBack.moveTo(-2, -9);
    binBack.lineTo(2, -9);
    binBack.lineTo(2 , -70);
    binBack.lineTo(8, -70);
    binBack.lineTo(-8, -70);
    binBack.lineTo(-2, -70);
    binBack.lineTo(-2, -9);
    binBack.fill();
    binBack.closePath();
    binBack.restore();
}

// drawSecPin()
// function drawSecPin() {
//     binBack.save();
//     binBack.translate(200, 200); 
//     binBack.beginPath(); 
//     binBack.strokeStyle = '#AFEEEE'; 
//     binBack.lineWidth = 1; 
//     binBack.lineJoin = "bevel"; 
//     binBack.miterLimit = 10; 
//     binBack.moveTo(0, 30); 
//     binBack.lineTo(3, -175); 
//     binBack.lineTo(13, -165); 
//     binBack.lineTo(0, -210); 
//     binBack.lineTo(-13, -165); 
//     binBack.lineTo(-3, -175); 
//     binBack.lineTo(0, 30); 
//     binBack.stroke(); 
//     binBack.closePath(); 
//     binBack.restore();
//     console.log(1)
// }




//绘制一个填充的矩形

//设置数字
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


//绘制指针
var now = new Date();
let hours = now.getHours(),
    minutes = now.getMinutes(),
    seconds = now.getSeconds();

hb.save()
hb.translate(200, 200)

//时针
hour(hours);


function hour(thour) {

    var newhour = 0;
    if (thour > 12) {
        newhour = thour - 12;
    } else {
        newhour = thour;
    }
    hb.rotate((2 * Math.PI / 12) * newhour);



}

hb.fillStyle = 'red'
hb.fillRect(0, 0, 10, 10)
//绘制一个填充的矩形
