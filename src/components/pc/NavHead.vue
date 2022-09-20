<template>
  <div class="border" style="position:relative">
    <div class="canvaszz"></div>
    <header class="header">
      <img src="../../assets/logo.png" class="logo" />
      <span>校软件实验室</span>&nbsp;
      <span>kcsoft-club</span>
    </header>
    <canvas id="myCanvas" class="canvas"></canvas>


    <div class="tit">
      <div>西安科技大学软件创新实验室</div>
      <div>我们的征途是星辰大海</div>
      <div @click="clickFun()"><a href="https://jq.qq.com/?_wv=1027&k=51ukmBo" target="blank"
          style="text-decoration:none;color:white;font-size: 20px;">加入我们</a></div>
    </div>




  </div>
</template>
<style>
.border {
  position: relative;
  width: 100vw;
  height: 100vh;
}


.tip {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: rgb(20, 30, 220);
  -webkit-animation: jump 4s infinite;
}

@-webkit-keyframes jump {
  0% {
    bottom: 70px;
  }

  30% {
    bottom: 30px;
  }

  50% {
    bottom: 20px;
  }

  80% {
    bottom: 30px;
  }

  100% {
    bottom: 70px;
  }
}




.tit :nth-child(n) {
  width: 100%;
  text-align: center;
}



.canvaszz {
  position: absolute;
  top: 0px;
  background-image: url('../../assets/bac2.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  filter: alpha(opacity=20);
  opacity: 0.4;
}

.canvas {
  position: absolute;
  top: 0px;
  display: inline-block;
  width: 100vw;
  height: 100vh;

  vertical-align: baseline;
  z-index: -2;
}
</style>

<script>
// import SignPage from './SignPage.vue'
export default {
  name: 'NavHead',
  data() {
    return {

      show: false,
    }
  },
  // components: {
  //   SignPage 
  // },
  mounted() {
    this.initCancas()
  },
  created() {
    if (this.$refs.paramsinfo && this.$refs.comment && this.$refs.recommend) {
      this.initCancas()
    }
  },
  methods: {

    clickFun() {

      this.show = !this.show;

    },
    enterBlock(event) {
      event.currentTarget.classList.add('animate__flipOutX')
    },
    leaveBlock(event) {
      event.currentTarget.classList.remove('animate__flipOutX')
    },
    initCancas() {
      console.log('初始化canvas')

      var canvas = document.getElementById('myCanvas'),
        ctx = canvas.getContext('2d'),
        w = (canvas.width = window.innerWidth),
        h = (canvas.height = window.innerHeight),
        hue = 217,
        stars = [],
        count = 0,
        maxStars = 1300 //星星数量

      var canvas2 = document.createElement('canvas'),
        ctx2 = canvas2.getContext('2d')
      canvas2.width = 100
      canvas2.height = 100
      var half = canvas2.width / 2,
        gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half)
      gradient2.addColorStop(0.025, '#CCC')
      gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)')
      gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)')
      gradient2.addColorStop(1, 'transparent')

      ctx2.fillStyle = gradient2
      ctx2.beginPath()
      ctx2.arc(half, half, half, 0, Math.PI * 2)
      ctx2.fill()


      function random(min, max) {
        if (arguments.length < 2) {
          max = min
          min = 0
        }

        if (min > max) {
          var hold = max
          max = min
          min = hold
        }
        return Math.floor(Math.random() * (max - min + 1)) + min
      }

      function maxOrbit(x, y) {
        var max = Math.max(x, y),
          diameter = Math.round(Math.sqrt(max * max + max * max))
        return diameter / 2
      }

      var Star = function () {
        this.orbitRadius = random(maxOrbit(w, h))
        this.radius = random(60, this.orbitRadius) / 8
        this.orbitX = w / 2
        this.orbitY = h / 2
        this.timePassed = random(0, maxStars)
        this.speed = random(this.orbitRadius) / 50000
        this.alpha = random(2, 10) / 10

        count++
        stars[count] = this
      }

      Star.prototype.draw = function () {
        var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
          y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
          twinkle = random(10)

        if (twinkle === 1 && this.alpha > 0) {
          this.alpha -= 0.05
        } else if (twinkle === 2 && this.alpha < 1) {

          this.alpha += 0.05
        }

        ctx.globalAlpha = this.alpha
        ctx.drawImage(
          canvas2,
          x - this.radius / 2,
          y - this.radius / 2,
          this.radius,
          this.radius,
        )
        //没旋转一次，角度就会增加
        this.timePassed += this.speed
      }

      //初始化所有星星
      for (var i = 0; i < maxStars; i++) {
        new Star()
      }

      function animation() {
        //以新图像覆盖已有图像的方式进行绘制背景颜色
        ctx.globalCompositeOperation = 'source-over'
        ctx.globalAlpha = 0.5 //尾巴
        ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)'
        ctx.fillRect(0, 0, w, h)

        //源图像和目标图像同时显示，重叠部分叠加颜色效果
        ctx.globalCompositeOperation = 'lighter'
        for (var i = 1, l = stars.length; i < l; i++) {
          stars[i].draw()
        }

        //调用该方法执行动画，并且在重绘的时候调用指定的函数来更新动画
        //回调的次数通常是每秒60次
        window.requestAnimationFrame(animation)
      }

      animation()
    },
  },
}
</script>
