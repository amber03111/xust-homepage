<template>
  <div class="border">

    <canvas id="Canvas2" class="canvas"></canvas>

  </div>
</template>
<style>
.border {
  position: relative;
  width: 100%;
  height: 99vh;
}



#Canvas2 {
  position: absolute;
  top: 0px;
  width:100% ;
  height: 100vh;
  z-index: -2;
}
</style>

<script>
export default {
  name: 'NavHead',
  components: {},
  mounted() {
    this.initCancas()
  },
  created() {
    if (this.$refs.paramsinfo && this.$refs.comment && this.$refs.recommend) {
      this.initCancas()
    }
  },
  methods: {
    initCancas() {
      var canvas, ctx, width, height, bubbles;

      bubbles = [];
      var Bubble = function (x, y, radius) {
        this.x = x;   //出现位置的x坐标
        this.y = y;   //出现位置的y坐标
        this.radius = radius;     //气泡的大小
        this.vy = -Math.random() * 5;     //气泡上浮的速度
        this.opacity = 0.2 + Math.random() * 0.5;     //气泡的透明度
        this.oldY = y;
      };
      Bubble.prototype.draw = function () {
        var strokeColor, fillColor;
        strokeColor = 'rgba(255, 255, 255,' + this.opacity + ')';
        fillColor = 'rgba(255, 255, 255,' + (this.opacity / 2) + ')';
        ctx.save();
        ctx.lineWidth = 0.8;
        ctx.strokeStyle = strokeColor;
        ctx.fillStyle = fillColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }
      init();
      function init() {
        canvas = document.getElementById('Canvas2'),
          ctx = canvas.getContext('2d');
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        generateBubbles(20);
        drawFrame();
      }
      function generateBubbles(bubblesLimit) {
        for (var i = 0; i <= bubblesLimit; i++) {
          bubbles.push(new Bubble(Math.random() * width, height + Math.random() * height / 2, 4 + Math.random() * 2));
        }
      }
      function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        var grad = ctx.createLinearGradient(0, 0, 0, 300);
        grad.addColorStop(1, " #2a5298");        
        grad.addColorStop(0, "#1e3c72 ");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
        bubbles.forEach(moveBubble);
      }
      function moveBubble(bubble) {
      
        if (bubble.y + bubble.radius <= 0) {
          bubble.y = bubble.oldY;
        }
        bubble.y += bubble.vy;
        bubble.draw(ctx);
      }
    },
  },
}
</script>
