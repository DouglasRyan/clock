# clock

使用canvas标签绘制时钟表盘

## 项目思路

1. 首先通过canvas绘制表盘，以及分针、秒针刻度。
2. 使用getImageData保存初始状态。
3. 封装时针、分针、秒针渲染函数，初始化时钟。
4. 设置定时器，每隔一秒重新渲染画布；通过putImageData恢复初始状态，并重新渲染画布。


[预览链接](https://lotu.xyz/clock)