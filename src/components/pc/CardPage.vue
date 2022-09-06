<template>
  <div>

    <div class="container2"
      style=" background: linear-gradient(to right, #000000, #434343); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */">
      <div style="width:100%;height:10px;"> </div>
      <h2
        style="width:100%; text-align:center ;margin :30px auto    ;color: #fafafa;font-size:2.5vw;letter-spacing: 0;text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135">
        我们的技术</h2>

      <div
        style="min-width:800px;height:50px;position:absolute;top:20vh;left:15%;display:flex;justify-content:space-evenly">
        <span style="color:#005B9C">Three.js</span> <span style="color:#C9921E">数据结构</span> <span
          style="color:green">TypeScript</span> <span style="color:purple">Redux</span> <span
          style="color:red">webpack</span>
      </div>
      <div
        style="min-width:500px;height:1px;position:absolute;bottom:0px;left:15%   ;display:flex;justify-content:space-evenly;transform-origin: 0 0 ;transform:rotateZ(270deg)">
        <span style="color:#005B9C">koa</span> <span style="color:#FFE382">Git</span> <span
          style="color:#FFDF5A">React</span> <span style="color:#A9BE32">函数式编程</span> <span
          style="color:#FFF321">HTTP/TCP</span>
      </div>
      <div
        style="min-width:800px;height:50px;position:absolute;bottom:0px;right:15%;display:flex;justify-content:space-evenly">
        <span style="color:#5B9C3F">C</span> <span style="color:#645B9C">C++</span> <span
          style="color:#00349C">Java</span> <span style="color:#DB9C31">Python</span> <span
          style="color:#005B9C">C#</span>
      </div>
      <div
        style="min-width:500px;height:50px;position:absolute;top:17vh;left:80%;display:flex;justify-content:space-evenly;transform-origin: 0 0;transform:rotateZ(90deg)">
        <span style="color:#3FB27F">websoket</span> <span style="color:#D6002F"> Docker</span> <span
          style="color:#C2AEDF">unity</span> <span style="color:#C3493D">Spring Boot</span> <span
          style="color:#A34312">Next.js</span>
      </div>
      <div class="card_box" style=" bottom:50px; left:25%">
        <div class="Card" style=" " :class="{ 'rotate360': showAnimate[1] }" @click="play(1)">
          <div class="card_back" style="font-size:13px; text-align:left">
            <p style="margin:40px 15px">
              &nbsp;   &nbsp;  前端开发是创建WEB页面或APP等前端界面呈现给用户的过程，通过HTML，CSS及JavaScript以及衍生出来的各种技术、框架、解决方案，来实现互联网产品的用户界面交互
              <br />
              &nbsp;   &nbsp; 前端开发从网页制作演变而来，名称上有很明显的时代特征。在互联网的演化进程中，网页制作是Web1.0时代的产物，早期网站主要内容都是静态，以图片和文字为主，用户使用网站的行为也以浏览为主。随着互联网技术的发展和HTML5、CSS3的应用，现代网页更加美观，交互效果显著，功能更加强大。
            </p>
          </div>
          <div class="card_front">
            <div class="card_tit">前端</div>
          </div>

        </div>
      </div>
      <div class="card_box" style=" bottom:50px;left:30%;  ">
        <div class="Card" :key='22' style="  bottom:0px; " :class="{ 'rotate360': showAnimate[2] }" @click="play(2)">
          <div class="card_back" style="font-size:13px; text-align:left">
            <p style="margin:40px 15px">  &nbsp;   &nbsp;  在软件架构和程序设计领域，前端是软件系统中直接和用户交互的部分，而后端是在后台工作的，控制着前端的内容，主要负责程序设计架构思想，管理数据库等。<br />

              &nbsp;   &nbsp;   前端控制ajax等技术向后端进行网络请求；后端收到请求后对数据库进行操作，返回给前端JSON数据；前端把相应数据展示在页面上。<br />
              &nbsp;   &nbsp;   后端更多的是与数据库进行交互以处理相应的业务逻辑，需要考虑的是如何实现功能、数据的存取、平台的稳定性与性能等，涉及动态语言如PHP、ASP、JSP等。

              将软件分为前端和后端是一种将软件不同功能的部分相互分离的抽象</p>
          </div>
          <div class="card_front">
            <div class="card_tit">后端</div>
          </div>

        </div>
      </div>
      <div class="card_box" style=" bottom:50px;left:35% ">
        <div class="Card" :key='33' style=" " :class="{ 'rotate360': showAnimate[3] }" @click="play(3)">
          <div class="card_back" style="font-size:13px; text-align:left">
            <p style="margin:40px 15px">
              &nbsp;   &nbsp;   所谓算法是指解决方案的准确而完整的描述。<br/>

              &nbsp;   &nbsp;  对于一个问题，如果可以通过一个计算机程序，在有限的存储空间内运行有限的时间，而得到正确的结果，则称这个问题是算法可解的。但算法不等于程序，也不等于计算方法。当然，程序也可以作为算法的一种描述，但程序通常还需要考虑很多与方法和分析无关的细节问题，这是因为在编写程序时要受到计算机系统运行环境的限制。通常，程序的编制不可能优于算法的设计。
            </p>
          </div>
          <div class="card_front">
            <div class="card_tit">算法</div>
          </div>
        </div>
      </div>

      <div class="card_box" style=" bottom:50px;left:40%;  ">
        <div class="Card" :key='22' style="  bottom:0px; " :class="{ 'rotate360': showAnimate[4] }" @click="play(4)">
          <div class="card_back" style="font-size:13px; text-align:left">
            <p style="margin:40px 15px">
              &nbsp;   &nbsp;  VR 即：虚拟现实

              Virtual Reality的简称缩写，即：虚拟现实，是指利用计算机技术模拟产生一个为用户提供视觉、听觉、触觉等感官模拟的三度空间虚拟世界，用户借助特殊的输入/输出设备，与虚拟世界进行自然的交互。<br />
              &nbsp;   &nbsp;  AR：即“增强现实”

              Augmented Reality的简称缩写，即：增强现实，是一种实时计算摄影机影像位置及角度，并辅以相应图像的技术。这种技术可以通过全息投影，在镜片的显示屏幕中将虚拟世界与现实世界叠加，操作者可以通过设备互动。


            </p>
          </div>
          <div class="card_front">
            <div class="card_tit">AR<br />/<br />VR</div>
          </div>
        </div>
      </div>

      <div class="card_box" style=" bottom:50px;left:45%;  ">
        <div class="Card" :key='22' style="  bottom:0px; " :class="{ 'rotate360': showAnimate[5] }" @click="play(5)">
          <div class="card_back" style="font-size:13px; text-align:left">
            <p style="margin:40px 15px">
              &nbsp;   &nbsp; 三维建模（3D Modeling），通过三维制作软件通过虚拟三维空间构建出具有三维数据的模型。<br />

              &nbsp;   &nbsp;   通常情况根据行业需求的不同可以分为：多边形建模（Polygon Modeling）、参数化建模（Parametric Modeling）、逆向建模（Reverse Modeling）、曲面建模（NURBS
              Modeling）等。<br />

              &nbsp;   &nbsp;  不同建模方式特点不同，作用也不同，对应着不同的行业需求。</p>
          </div>
          <div class="card_front">
            <div class="card_tit">3D建模算法</div>
          </div>
        </div>
      </div>
      <div class="card_box" style=" bottom:50px; left:50%">
        <div class="Card" style=" " :class="{ 'rotate360': showAnimate[6] }" @click="play(6)">
          <div class="card_back" style="font-size:13px; text-align:left">
            <p style="margin:40px 15px">

              &nbsp;   &nbsp;  简单说，"函数式编程"是一种"编程范式",也就是如何编写程序的方法论。
              它属于"结构化编程"的一种，主要思想是把运算过程尽量写成一系列嵌套的函数调用。<br/>

              &nbsp;   &nbsp;  函数编程支持函数作为第一类对象，有时称为闭包或者仿函数（functor）对象。实质上，闭包是起函数的作用并可以像对象一样操作的对象。与此类似，FP
              语言支持高阶函数。高阶函数可以用另一个函数（间接地用一个表达式） 作为其输入参数，在某些情况下，它甚至返回一个函数作为其输出参数。这两种结构结合在一起使得可以用优雅的方式进行模块化编程，这是使用 FP
              的最大好处</p>
          </div>
          <div class="card_front">
            <div class="card_tit">函数式编程</div>
          </div>
        </div>
      </div>
      <div class="card_box" style=" bottom:50px; left:55%">
        <div class="Card" style=" " :class="{ 'rotate360': showAnimate[7] }" @click="play(7)">
          <div class="card_back" style="font-size:13px; text-align:left">
            <p style="margin:40px 15px">
             &nbsp;   &nbsp; 机器学习是一门多学科交叉专业，涵盖概率论知识，统计学知识，近似理论知识和复杂算法知识，使用计算机作为工具并致力于真实实时的模拟人类学习方式，并将现有内容进行知识结构划分来有效提高学习效率。<br/>
             &nbsp;   &nbsp;  该领域的主要研究对象是人工智能，特别是如何在经验学习中改善具体算法的性能，是对能通过经验自动改进的计算机算法的研究。用数据或以往的经验，以此优化计算机程序的性能标准</p>
          </div>
          <div class="card_front">
            <div class="card_tit">机器学习</div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {

      active: true,
      isClick: true,
      currentIndex: 0,
      flag: false,
      showAnimate: [
        false, false, false,
      ]
    }
  },
  mounted() {

  },
  methods: {
    show(event) {
      this.currentIndex = event
    },
    play(e) {
      console.log(e)
      if (this.showAnimate[e]) {
        this.$set(this.showAnimate, e, false)
      }
      else {
        this.$set(this.showAnimate, 1, false)
        this.$set(this.showAnimate, 2, false)
        this.$set(this.showAnimate, 4, false)
        this.$set(this.showAnimate, 5, false)
        this.$set(this.showAnimate, 6, false)
        this.$set(this.showAnimate, 7, false)
        this.$set(this.showAnimate, 0, false)
        this.$set(this.showAnimate, 3, false)
        this.$set(this.showAnimate, e, true)
      }

 



    },

    itemClick: function (index) {
      this.currentIndex = index
    
      this.cardArrs.index.selected = true
    },
  
  },
}
</script>
<style>
.rotate360 {
  animation: rotate360 1s;
  -webkit-animation-fill-mode: forwards;
}

@keyframes rotate360 {
  0% {

    bottom: 0px;
  }

  50% {

    transform: rotate3d(0, 1, 0, 90deg);
  }

  100% {

    transform: rotate3d(0, 1, 0, 180deg) translateZ(9999px);
    z-index: 9999;
    top: 100px;


  }
}

.card_tit {
  position: absolute;
  left: 5px;
  top: 10px;
  width: 40px;
  height: 60px;
  color: white;

}

.Card {
  width: 250px;
  height: 350px;
  position: relative;
  transform-style: preserve-3d;
  transition: all 5s;
}




.card_box {
  width: 250px;
  height: 350px;
  display: inline-block;
  position: absolute;

  transition: left 2s, transform 2s 2s;

}

.card_front,
.card_back {
  position: absolute;
  top: 0px;
  width: 250px;
  height: 350px;
  color: papayawhip;
  font-size: 35px;
  text-align: center;

  border-radius: 10px;
}

.card_front {
  background-color: black;
  transform: translateZ(2px);
  background-image: url(../../assets/card.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  font-family: "STXinwei", "FZShuTi";
}

.card_back {
  background-image: url(../../assets/card_front.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transform: translateZ(-3px);
  transform: rotate3d(0, 1, 0, 180deg);
}

.container2 {
  width: 100%;
  height: 100vh;
  position: relative;
  display: block;
  transition: all 2s, transform 2s 2s;
}
</style>
