<template>
  <div style="width:100%;height:100%;  background: linear-gradient(to right, #000428, #004e92);">


    <div style="width:100%;height:30px;"></div>
    <h2
      style="width:100%; text-align:center   ;color: #fafafa;font-size:2.5vw;margin-top:20px;
  letter-spacing: 0;
    text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135">
      实验室介绍</h2>

    <div style="width:90%;margin:50px auto">
      <div style="margin-right:30px; ">
        <slider animation="fade" style="float:left;width:40%;height:60vh;min-height:350px">
          <slider-item v-for="(item, index) in list" :key="index" :style="item" @click="hello">


            <img :src="item.src" alt="ee"
              style="width:100%;height:100%;background-size:100% 100%;background-repeat: no-repeat;" />
          </slider-item>
        </slider>
      </div>

    </div>
    <div style="margin-left:40px; color:white;font-size:1.5vw;line-height:2.5vw;width:50%;float:left">
      校软件创新班，成立于2012年。于2018年正式独立出来，在成员和老师的努力下，创新班的管理制度和学习领域在不断开拓与完善，由本科生自主管理，现有正式成员30余人，见习成员30余人。

      创新班定期对成员进行培训与考核，是西安科技大学参加算法和程序设计类竞赛的主要力量和后备培训组织。<br>

      平均每年科技类竞赛获奖 > 20 项，19 年省级及以上获奖数量达到了 15+ 项，20年因疫情原因许多比赛取消或推迟，但仍旧拿到了20+的获奖数量，并有外文论文期刊1篇。21年获奖30余项。

      19年、21年国家奖学金各1人，21年国家励志奖学金2人，其余本科生奖学金若干。<br>

      从 15 级到 17 级，共两位浙大研究生。

      就业单位覆盖了全中国所有的互联网大厂，包括但不限于字节跳动、阿里巴巴、美团、腾讯、百度、Keep 等</div>
  </div>
</template>
<script>
import { Slider, SliderItem } from 'vue-easy-slider'

export default ({
  name: 'body',
  components: {
    Slider,
    SliderItem,
  },
  data() {
    return {
      list: [
        {width: '100%', height: '100%', src: require("../../assets/bac2.jpg") },
        {  width: '100%', height: '100%', src: require("../../assets/bac.jpg") },
        { width: '100%', height: '100%', src: require("../../assets/home.jpg") },
      ],
    }
  },
  methods: {
    hello($event) {
      console.log(`hello index: ${$event}`)
    },
  },
})
</script>
<style>
</style>