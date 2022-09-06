
<template>

  <div class="box" style="width:100vw; height:100vh; position:relative;background-color:black">
    <div style="width:100%;height:1%;"></div>
    <h2
      style="text-align:center   ;color: #fafafa;font-size:2rem;
letter-spacing: 0;margin:5vh auto;
text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135">
      各种奖项与荣誉</h2>
    <p style="width:100%; line-height:4vh ;font-size:1rem;margin :2% auto;color: #fafafa">
      &nbsp; &nbsp; &nbsp; &nbsp;校软件实验室平均每年科技类竞赛获奖 > 20 项，19 年省级及以上获奖数量达到了 15+
      项，20年因疫情原因许多比赛取消或推迟，但仍旧拿到了20+的获奖数量，并有外文论文期刊1篇。21年获奖30余项。

      19年、21年国家奖学金各1人，21年国家励志奖学金2人，其余本科生奖学金若干。
    </p>
    <carousel-3d :perspective="35" :autoplay="true" :display="5" controlsVisible :controlsHeight="80"
      :animationSpeed="1000" :width="this.cWidth" :height="cHeight" style="width:98vw; position:absolute; bottom:3vh">
      <slide v-for="(slide, i) in slides" :key="i" :index="i">
        <template slot-scope="{ index, isCurrent, leftIndex, rightIndex}">
          <img :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }"
            style="width:100%;height:100%" :src="slide.src">

        </template>
      </slide>
    </carousel-3d>
  </div>

</template>
 
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
/* eslint-disable */
export default {
  components: {
    Carousel3d,
    Slide
  },
  data() {
    return {
      cWidth: 150,
      cHeight: 350,
      slides: [
        {
          title: 'parent',
          slide: 23424234234234,
          src: require("../../assets/card.jpg")
        },
        {
          title: 'parent',
          slide: 23424234234234,
          src: require("../../assets/card.jpg")
        },
        {
          title: 'parent',
          slide: 23424234234234,
          src: require("../../assets/card.jpg")
        },
        {
          title: 'parent',
          slide: 23424234234234,
          src: require("../../assets/card.jpg")
        },
        {
          title: 'parent',
          slide: 23424234234234,
          src: "../../assets/bac.jpg"
        },
        {
          title: 'parent',
          slide: 23424234234234,
          src: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
        },
        {
          title: 'parent',
          slide: 23424234234234,
          src: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
        },
        {
          title: 'parent',
          slide: 23424234234234,
          src: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
        },
      ]
    }
  },
  created() {
    this.changeWidth();
  },
  mounted() {
    window.onresize = () => {
      this.changeWidth();
    };
  },
  methods: {
    //根据电脑分辨率设置轮播图宽度
    changeWidth() {
      if (
        document.body.clientWidth >= 600 &&
        document.body.clientHeight > 1000
      ) {
        this.cWidth = 700;
        this.cHeight = 500;
        console.log("Ddd")
      }
      if (
        document.body.clientWidth >= 1500 &&
        document.body.clientWidth < 1700
      ) {
        this.cWidth = 220;
      }
      if (document.body.clientWidth < 1500) {
        this.cWidth = 180;
      }
    },
    imgClick(data, obj) {
      console.log(data, obj)
    }
  },


}
</script>
 
<style>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
