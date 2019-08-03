let canvas = document.getElementById('canvas');//画布
let hb = canvas.getContext('2d');//2D画板
let numBack = canvas.getContext('2d');//2D画板
setNum()

hb.translate(200, 200)
// for (let i = 0; i < 12; i++) {
//     hb.beginPath()
//     hb.rotate(Math.PI / 6)
//     let a = i + 4
//     if (a>12) {
//         a = a -12
//     }
//     hb.fillText(`${a}`,80,5)
//     hb.textAlign = "left";
//     hb.closePath()
// }

//设置数字
function setNum() {
    console.log(1)
    numBack.save();
    numBack.translate(200, 200);
    numBack.beginPath();
    numBack.fillStyle = 'red';
    numBack.font = "15px Helvetica";
    for (var i = 0; i < 60; i++) {
        if (i % 5 == 0) {
            numBack.lineWidth = 5;
            var xPoint = Math.sin(i * 6 * 2 * Math.PI / 360) * 90;
            var yPoint = -Math.cos(i * 6 * 2 * Math.PI / 360) * 90;
            numBack.fillText(i === 0 ? 12 : i / 5, i === 0 ? -15 : xPoint - 10, i === 0 ? -185 : i <= 30 ? yPoint + 5 : yPoint + 10);
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
    hb.lineWidth = 8
    hb.moveTo(100, 0)
    hb.lineTo(120, 0)
    hb.stroke()
    hb.rotate(Math.PI / 6)    //每个30deg画一个时钟刻度线
    let a = i
    
    hb.closePath()
}

//内表盘
hb.beginPath()
hb.strokeStyle = '#B70D0D'
hb.arc(0,0,124,0,Math.PI*2);
hb.lineWidth = 5
hb.stroke()
hb.closePath()

//外表盘
hb.beginPath()
hb.strokeStyle = 'red'
hb.arc(0,0,130,0,Math.PI*2);
hb.lineWidth = 8
hb.stroke()
hb.closePath()


