<template>
  <div style="height:100vh !important; width:100%; position: relative; ">
    <BacPage style='position:absolute; bottom:0px;width:100% ;height:100%;z-index: -200;'> </BacPage>
    <div style="width:100%;height:3px;"></div><br />
    <h2
      style="width:100%; text-align:center ;margin :20px auto;color: #fafafa;font-size: 2.5vw;
letter-spacing: 0;
text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135">
      实验室成员</h2>


    <div class="master" style="margin:20px auto; width:400px; display:flex; justify-content:space-evenly">
      <div style="width:90px;height:100px ;position: relative;">

        <div id="mask" style="display:inline-block;width:90px; height:90px;">史晓楠老师</div>
        <img style="width:90px; height:90px; " src="../../assets/card.jpg" />

      </div>
      <div style="width:90px;height:90px;position: relative;">
        <div id="mask" style="width:90px; height:90px;">19级尉宸康</div>
        <img style="width:90px; height:90px; " src="../../assets/head/yuchenkang.jpg" />
      </div>
      <div style="width:90px;height:90px;position: relative;">
        <div id="mask" style="width:90px; height:90px;">20级江明畅</div>
        <img style="width:90px; height:90px; " src="../../assets/card.jpg" />
      </div>
    </div>
    <vue-seamless-scroll :data="listData" :class-option="classOption" class="warp" style="margin:5vh 0">

      <ul class="ul-item">
        <li class="li-item" v-for="(item, index) in listData" :key="index">
          <div id="mask" style="">
            {{ item.num }}

          </div>
          <img :src="item.src" style='width:100%; height:100%' />
        </li>
      </ul>

    </vue-seamless-scroll>

    <div> </div>


    <vue-seamless-scroll :data="listData2" :class-option="classOption" class="warp" style="margin:5vh 0 ;z-index:40000;transform:translateZ(1000px)">

      <ul class="ul-item">
        <li class="li-item" v-for="(item, index) in listData2" :key="index">
          <div id="mask" style="">
            {{ item.num }}

          </div>
          <img :src="item.src" style='width:100%; height:100%' />
        </li>
      </ul>

    </vue-seamless-scroll>
    <div> </div>

    <WavePage style='position:absolute; bottom:0px;width:100%'>


    </WavePage>

    <div
      style="text-align:center; width:100%;z-index:300; font-size:10px;color:aquamarine; position:absolute;bottom:20px;transform:translateZ(10px)">
      <div style="">
        <p>正在从2022级新生和2021级老生中招募新成员</p>
        <p>欢迎加入2021级招新QQ群：860323803</p>
        <p>地址：西安科技大学煤炭科技中心#306室✌️</p>
      </div>
      <img src='../../assets/record.png' alt="备案" style="vertical-align:center" />
      <a href="https://beian.miit.gov.cn/">陕ICP备 19005593号-3</a>
    </div>

  </div>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
import WavePage from './WavePage'
import BacPage from './BacPage'
import jQuery from 'jquery'
export default {
  name: 'Example03Basic',
  components: {
    vueSeamlessScroll, WavePage, BacPage
  },
  data() {
    return {
      listData: [
      {
          num: "19级王子恒",
          src: require("../../assets/head/21/wangzihegn.jpg"),
          active: false
        },
        {
          num: "19级吴浩然",
          src: require("../../assets/head/21/wuhaoran.jpg"),
          active: false
        },
        {
          num: "19级徐晨屹",
          src: require("../../assets/head/21/xuchengyi.jpg"),
          active: false
        },
         {
          num: "19级尹航",
          src: require("../../assets/head/21/yinhang.jpg"),
          active: false
        },
        {
          num: "19级王雨墨",
          src: require("../../assets/head/21/wangyumo.jpg"),
          active: false
        },
        {
          num: "19级袁潇",
          src: require("../../assets/head/21/yuanxiao.jpg"),
          active: false
        },
        {
          num: "20级庞力凡",
          src: require("../../assets/head/panglifan.jpg"),
          active: false
        },
        {
          num: "20级甘浩然",
          src: require("../../assets/head/ganhaoran.jpg"),
          active: false
        },
        {
          num: "20级黄雅莉",
          src: require("../../assets/head/huangyali.jpg"),
          active: false
        },
        {
          num: "20级李振学",
          src: require("../../assets/head/lizhenxue.jpg"),
          active: false
        },
        {
          num: "20级林美辰",
          src: require("../../assets/head/linmeichen.jpg"),
          active: false
        },
        {
          num: "20级吴欣亭",
          src: require("../../assets/head/wuxinting.jpg"),
          active: false
        },
        {
          num: "20级王美馨",
          src: require("../../assets/head/wangmeixin.jpg"),
          active: false

        },
        {
          num: "20级沈哲俊",
          src: require("../../assets/head/shenzhejun.jpg"),

        },
        {
          num: "20级苏启杰",
          src: require("../../assets/head/suqijie.jpg"),
          active: false
        },
        {
          num: "20级张旺祯",
          src: require("../../assets/head/zhangwangzhen.jpg"),
          active: false
        },
        {
          num: "20级周以恒",
          src: require("../../assets/head/zhouyiheng.jpg"),
          active: false
        }
      ],

      classOption: {
        limitMoveNum: 2,
        direction: 3,
        step: 2,
        switchSingleStep: 150,
      },
      listData2: [
        {
          num: "21级何昌泽",
          src: require("../../assets/head/21/hechangze.jpg"),
          active: false
        },
        {
          num: "21级霍鼐铭",
          src: require("../../assets/head/21/huonaiming.jpg"),
          active: false
        },
        {
          num: "21级金家正",
          src: require("../../assets/head/21/jingjiazheng.jpg"),
          active: false
        },
        {
          num: "21级康超",
          src: require("../../assets/head/21/kangchao.jpg"),
          active: false
        },
        {
          num: "21级李冬雪",
          src: require("../../assets/head/21/lidongxue.jpg"),
          active: false
        },
        {
          num: "21级刘宏歌",
          src: require("../../assets/head/21/liuhongge.jpg"),
          active: false
        },
        {
          num: "21级马苗苗",
          src: require("../../assets/head/21/mamiaomaio.jpg"),
          active: false
        },
        {
          num: "21级肖仕雨",
          src: require("../../assets/head/21/xiaoshiyu.jpg"),
          active: false
        },
        {
          num: "21级秦建泽",
          src: require("../../assets/head/21/qingjianze.jpg"),
          active: false
        },
        {
          num: "21级师朝祥",
          src: require("../../assets/head/21/shichaoxiang.jpg"),
          active: false
        },
        {
          num: "21级孙海文",
          src: require("../../assets/head/21/sunhaiwen.jpg"),
          active: false
        },
        {
          num: "21级王泽璟",
          src: require("../../assets/head/21/wangceqing.jpg"),
          active: false
        },
         {
          num: "21级王子超",
          src: require("../../assets/head/21/wangzichao.jpg"),
          active: false
        },
        {
          num: "21级周剑英",
          src: require("../../assets/head/21/zhoujianying.jpg"),
          active: false
        },
        {
          num: "21级詹明明",
          src: require("../../assets/head/21/zhanmingming.jpg"),
          active: false
        },
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
#mask {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: aquamarine;
  transform: translateZ(10px);
}

#mask:hover {
  opacity: 1;
  z-index: 1000;
  background-color: beige;
}

.warp {

  height: 90px;
  margin: 0 auto;
  overflow: hidden;
width:100%; 
  ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;

    &.ul-item {
      display: flex;

      .li-item {
        width: 90px;
        height: 90px;
        margin-right: 15px;
        line-height: 90px;

        border-radius:50%;
        overflow:hidden;
        text-align: center;
        font-size: 15px;
        position: relative;
        background-color: #999;
        color: #fff;
        translate: all 1s;


        #mask {
          opacity: 0;
          position: absolute;
          top: 0px;
          width: 100%;
          height: 100%;
          background-color: aquamarine;
          transform: translateZ(100px);
          z-index:10000;
          border-radius:50%;
        overflow:hidden;
        }

        #mask:hover {
          opacity: 1;
          background-color: beige;
        }
      }
    }
  }
}
</style>

