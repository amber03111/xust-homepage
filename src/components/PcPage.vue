
<template>

  <div id="app">
    <header class="header">
      <img src="../assets/logo.png" class="logo" style="width:60px;height:60px" />
      <span>校软件实验室</span>&nbsp;
      <span>kcsoft-club</span>
    </header>
    <div
      style="display:flex ; justify-content:center;align-items:center; width:50px;height:50px; border-radius:50%; background-color:darkblue;text-align:center;color:white; position:fixed;right:10px; bottom:100px; z-index:9999;font-size:12px"
      @click="show = true,
      moveSectionDown()">
      <div>
        加入<br>我们
      </div>
    </div>
    <div
      style=" display:flex; justify-content:center;align-items:center; width:50px;height:50px; border-radius:50%; background-color:indigo;text-align:center;color:white; position:fixed;right:10px; bottom:30px; z-index:9999;font-size:12px"
      @click="mes() ,
      moveSectionDown()">

      <div>
        <router-link to="/signpc" style="text-decoration: none;color:white"> 考核<br>报名<br> </router-link>
      </div>
    </div>
    <div v-if="show"
      style=" position:fixed; top:20%; left:50%;transform: translateX(-50%) ;z-index:200;background-color: white;width:600px;height:400px;border-radius: 10px;">
      <div style='width:100%; height:100%;position: relative;'>
        <div style="position:absolute;right:10px;top:8px" @click="show = false">×</div>
        <div style="position:absolute;left:10px;top:10px;font-size:14px">校软件创新实验室</div>
        <div style="position:absolute;width:100%; text-align:center; top:50px;font-size:12px;color:darkgray">
          无论你来自哪里，是什么专业。<br />
          只要你热爱学习、热爱计算机软件编程、热爱创新，我们就欢迎你的加入！<br />
          扫描以下二维码加入招新群了解更多。</div><br />
        <img src="../assets/invite.jpg"
          style="width:150px;height:230px; position:absolute; ;left:50%;transform: translateX(-50%); bottom:50px" />
        <div @click="show = false"
          style="position:absolute;bottom:20px; left:50%;transform: translateX(-50%);width:140px">我知道啦，这就去</div>
      </div>

    </div>
    <full-page :options="options" ref="fullpage">

      <div class="section">
        <NavHead>
        </NavHead>
        <div class="tip" @click="
        mov()">↓点击了解更多</div>
      </div>
      <div class="section">
        <MesPage></MesPage>
      </div>
      <div class="section">
        <HelloPage></HelloPage>
      </div>
      <div class="section">

        <CardPage></CardPage>

      </div>
      <div class="section">
        <AwardPage></AwardPage>
      </div>
      <div class="section">

        <PhotoPage></PhotoPage>

      </div>
    </full-page>

  </div>
</template>
 
<script>
// import SignPage from './pc/SignPage'
import NavHead from './pc/NavHead'
import PhotoPage from './pc/PhotoPage'
import MesPage from './pc/MesPage'
import CardPage from './pc/CardPage'
import HelloPage from './pc/HelloPage'
import AwardPage from './pc/AwardPage'
export default {
  name: 'PC',
  components: {
    // SignPage  
    NavHead,
    MesPage,
    CardPage,
    HelloPage,
    PhotoPage,
    AwardPage
  },
  data() {
    return {
      show: false,
      options: {
        css3: false,
        autoScrolling: false,
        continuousVertical: false,
        controlArrows: true,
        menu: '.nav',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['首页', '实验室介绍', '获奖信息', '我们的技术', '比赛信息', '实验室成员'],
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',

      }
    }
  },
  methods: {
    mov() {
      this.$refs.fullpage.api.moveSectionDown();
    },
    mes() {
      //    alert("考核报名暂未开始，请加入招新群了解详细信息");

      //  this.$refs.fullpage.api.moveSectionDown();



    }
  }
}
</script>
<style>
.section {
  width: 100%;
  height: 100%;
  display: block;
  min-width: 1000px;
  min-height: 450px;
}

.logo {
  width: 60px;
  height: 60px;
  vertical-align: center;
  margin: 0 20px;
}

.header {
  width: 100%;
  height: 80px;
  background-color: rgba(23, 21, 21, 0.8);
  display: flex;
  color: rgb(212, 208, 208);
  font-size: 24px;
  font-family: 'Blackletter', 'FZShuTi', 'Lucida Grande', 'Lucida Sans Unicode';
  position: fixed;
  z-index: 200;
  top: 0px;
  align-items: center;
}
</style>
