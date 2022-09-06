<template>
  <div class="border">
    <div class="canvaszz"></div>
    <canvas id="myCanvas" class="canvas"></canvas>
    <div class="tit2">
      <div>西安科技大学软件创新实验室</div>
      <div>我们的征途是星辰大海</div>
      <div @click="clickFun()">加入我们</div>
     
    </div>
    <div v-if="show"
       style=" position:fixed; top:20vh; left:50%;transform: translateX(-50%) ;z-index:200;background-color: white;width:90vw;height:50vw;border-radius: 10px; height:70vh">
      <div style='width:100%; height:100%;position: relative;'>
        <div style="position:absolute;right:10px;top:8px" @click="show = false">×</div>
        <div style="position:absolute;left:10px;top:10px;font-size:14px">校软件创新实验室</div>
        <div style="position:absolute;width:100%; text-align:center; top:50px;font-size:12px;color:darkgray">
          无论你来自哪里，是什么专业。<br />
          只要你热爱学习、热爱计算机软件编程、热爱创新<br/>
          我们就欢迎你的加入！<br />
          扫描以下二维码加入招新群了解更多。</div><br />
          <img src="../../assets/invite.jpg" style="width:60vw;height:50vh; position:absolute;left:50%;transform: translateX(-50%); bottom:5vh"/>
        <div @click="show = false"
          style="position:absolute;bottom:2vh; left:50%;transform: translateX(-50%);"> <router-link to="/signmobile" style="text-decoration: none;color:black">我知道啦，这就去 </router-link></div>
      </div>

    </div>
    <div class="tip">↓向下阅读了解更多</div>
  </div>
</template>
<style>
.border {
  position: relative;
  width: ;
  height: 100vh;
}

.header {
  width: 100%;
  height: 10%;
  background-color: rgba(23, 21, 21, 0.8);
  display: flex;
  color: rgb(212, 208, 208);
  font-size: 24px;
  font-family: 'Blackletter', 'FZShuTi', 'Lucida Grande', 'Lucida Sans Unicode';

  align-items: center;
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


.logo {
  width: 7vw;
  height: 7vw;
  vertical-align: center;
  margin: 0 2%;
}

.tit2 {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: ;
  height: 30vh;
  background-color: rgba(78, 113, 143, 0.5);
}

.tit2 :nth-child(n) {
  width: 100%;
  text-align: center;
}

.tit2 :nth-child(1) {
  font-size: 3rem;
  color: white;
  margin-top: 30px;
}

.tit2 :nth-child(2) {
  font-size: 1rem;
  color: rgb(4, 23, 92);
  margin-top: 15px;
  font-family: '宋体';
  font-weight: 700;
}

.tit2 :nth-child(3) {
  font-size: 2rem;
  color: white;

  margin-top: 30px;
}

.canvaszz {
  position: absolute;
  top: 0px;

  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: ;
  height: 100vh;
  z-index: -1;
  filter: alpha(opacity=20);
  opacity: 0.4;
}

.canvas {
  position: absolute;
  top: 0px;
  display: inline-block;
  width: ;
  height: 100vh;

  vertical-align: baseline;
  z-index: -2;
}
</style>

<script>
export default {
  name: 'NavHead',
  data() {
    return {
      show: false,
    }
  },
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
    clickFun() {
      // 改变show的值true/false
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
        hue = 217, //色调色彩
        stars = [], //保存所有星星
        count = 0, //用于计算星星
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

      // End cache
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
        //星星移动范围，值越大范围越小，
        return diameter / 2
      }

      var Star = function () {
        //星星移动的半径
        this.orbitRadius = random(maxOrbit(w, h))
        //星星大小，半径越小，星星也越小，即外面的星星会比较大
        this.radius = random(60, this.orbitRadius) / 8
        //所有星星都是以屏幕的中心为圆心
        this.orbitX = w / 2
        this.orbitY = h / 2
        //星星在旋转圆圈位置的角度,每次增加speed值的角度
        //利用正弦余弦算出真正的x、y位置
        this.timePassed = random(0, maxStars)
        //星星移动速度
        this.speed = random(this.orbitRadius) / 50000
        //星星图像的透明度
        this.alpha = random(2, 10) / 10

        count++
        stars[count] = this
      }

      Star.prototype.draw = function () {
        //星星围绕在以屏幕中心为圆心，半径为orbitRadius的圆旋转
        var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
          y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
          twinkle = random(10)

        //星星每次移动会有1/10的几率变亮或者变暗
        if (twinkle === 1 && this.alpha > 0) {
          //透明度降低，变暗
          this.alpha -= 0.05
        } else if (twinkle === 2 && this.alpha < 1) {
          //透明度升高，变亮
          this.alpha += 0.05
        }

        ctx.globalAlpha = this.alpha
        //使用canvas2作为源图像来创建星星，
        //位置在x - this.radius / 2, y - this.radius / 2
        //大小为 this.radius
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

        window.requestAnimationFrame(animation)
      }

      animation()
    },
  },
}
</script>
