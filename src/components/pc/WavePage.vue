<template>

 <div> <canvas id="c"></canvas></div>

</template>

<style>
canvas {
  width: 100%;
  height: 150px;

}
</style>
<script>
export default {
  name: 'WavePage',
  components: {},
  mounted() {
    this.initCanvas()
  },
  methods: {
    initCanvas() {
      var canvas = document.getElementById('c')
      var ctx = canvas.getContext('2d')

      var nowRange = 40 //用于做一个临时的range

      //画布属性
      var mW = (canvas.width = 350)
      var mH = (canvas.height = 100)
      var lineWidth = 1
 

      var sX = 0
      var axisLength = mW //轴长
      var waveWidth = 0.008 //波浪宽度,数越小越宽
      var speed = 0.06 //波浪速度，数越大速度越快
      var xOffset = 0 //波浪x偏移量

      ctx.lineWidth = lineWidth
  

      var drawSin = function (xOffset, color, waveHeight) {
        ctx.save()
        var points = [] 
        ctx.beginPath()
        //在整个轴长上取点
        for (var x = sX; x < sX + axisLength; x += 20 / axisLength) {
          //此处坐标(x,y)的取点，依靠公式 “振幅高*sin(x*振幅宽 + 振幅偏移量)”
          var y = Math.sin((-sX - x) * waveWidth + xOffset) * 0.8 + 0.1
          var dY = mH * (1 - nowRange / 100)
          points.push([x, dY + y * waveHeight])
          ctx.lineTo(x, dY + y * waveHeight)
        }

        ctx.lineTo(axisLength, mH)
        ctx.lineTo(sX, mH)
        ctx.lineTo(points[0][0], points[0][1])
        ctx.fillStyle = color
        ctx.fill()

        ctx.restore()
      }

      var render = function () {
        ctx.clearRect(0, 0, mW, mH)
    

        drawSin(xOffset + Math.PI * 0.7, 'rgba(28, 134, 209, 0.2)', 22)
        drawSin(xOffset + Math.PI * 0.2, 'rgba(28, 134, 209, 0.4)', 20)
        drawSin(xOffset, '#1c86d1', 18)

        xOffset += speed
        requestAnimationFrame(render)
      }

      render()
    },
  },
}
</script>
