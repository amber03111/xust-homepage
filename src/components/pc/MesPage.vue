<template>
  <div style="width:100%;height:100vh;  background: linear-gradient(to right, #000428, #004e92);">


    <div style="width:100%;height:10px;"></div>
    <h2 class="m_tit">
      实验室介绍</h2>

    <div class="m_border">

        <slider animation="fade" class="m_silder">
          <slider-item v-for="(item, index) in list" :key="index" :style="item" @click="hello">


            <img :src="item.src" alt="ee" class="m_img" />
          </slider-item>
        </slider>
   

    </div>
    <div class="m_mes">
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
        { width: '100%', height: '100%', src: require("../../assets/bac2.jpg") },
        { width: '100%', height: '100%', src: require("../../assets/bac.jpg") },
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
@media only screen and (min-width: 1200px) {
  .m_tit {
    width: 100%;
    text-align: center;
    color: #fafafa;
    font-size: 2.5vw;
    margin-top: 20px;
    letter-spacing: 0;
    text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135
  }

  .m_mes {
    margin-left: 40px;
    color: white;
    font-size: 1.5rem;
    line-height: 2.5vw;
    width: 50%;
    float: left;
  }

  .m_img {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .m_silder {
    float: left;
    width: 40vw !important;  
    height: 60vh !important;

  }

  .m_border {
    width: 95%;
    margin: 50px auto
  }
}

@media only screen and (min-width: 900px) and (max-width: 1199px) {

  .m_tit {
    width: 100%;
    text-align: center;
    color: #fafafa;
    font-size: 2.5vw;
    margin-top: 20px;
    letter-spacing: 0;
    text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135
  }

  .m_mes {
    margin-left: 40px;
    color: white;
    font-size: 1.5rem;
    line-height: 2.5vw;
    width: 50%;
    float: left;
  }

  .m_img {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .m_silder {
    float: left;
    width: 40vw !important;  
    height: 60vh !important;

 
  }

  .m_border {
    width: 95%;
    margin: 50px auto
  }
}




@media only screen and (max-width: 900px) {
  .m_tit {
    width: 100%;
    text-align: center;
    color: #fafafa;
    font-size: 2rem;
    margin-top: 20px;
    letter-spacing: 0;
    text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135
  }

  .m_mes {
    margin: 2vh 5%;
    color: white;
    font-size: 0.8rem;
    line-height:1.2rem;
    width: 90%

  }

  .m_img {
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    overflow: hidden;
  }

  .m_silder {
    width: 95vw;
    margin: 2vw auto;
    height: 53vw !important;  
  }

  .m_border {
    width: 90vw;
    margin: 2vh auto
  }
}
</style>