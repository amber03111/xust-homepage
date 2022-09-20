
<template>

  <div id="app">

    <div class="join" @click="show = true,show2=false">
      <div>
        加入<br>我们
      </div>
    </div>
    <div class="sign" @click="show2 = true,show=false">

      <div>
        考核<br>报名<br>
      </div>
    </div>
    <div v-if="show" class="f_tip1">
      <div style='width:100%; height:100%;position: relative;'>
        <div style="position:absolute;right:10px;top:8px" @click="show = false">×</div>
        <div style="position:absolute;left:10px;top:10px;font-size:14px">校软件创新实验室</div>
        <div style="position:absolute;width:100%; text-align:center; top:50px;font-size:12px;color:darkgray">
          无论你来自哪里，是什么专业。<br />
          只要你热爱学习、热爱计算机软件编程、热爱创新，我们就欢迎你的加入！<br />
          扫描以下二维码加入招新群了解更多。</div><br />
        <img src="../assets/invite.jpg" class="invitejpg" />
        <div @click="show = false"
          style="position:absolute;bottom:20px; left:50%;transform: translateX(-50%);width:140px">我知道啦，这就去</div>
      </div>

    </div>
    <div v-if="show2" class="f_tip2">
      <div style='width:100%; height:100%;position: relative;'>
        <div style="position:absolute;right:10px;top:8px" @click="show2 = false">×</div>
        <div style="position:absolute;left:10px;top:10px;font-size:14px">校软件创新实验室</div>
        <div v-if="sign" style="text-align:center;line-height:350px;">
          考核报名暂未开始，请加入招新群了解详细信息
        </div>
        <div v-if="!sign" style="position:absolute ;top:20px; left:50%;transform: translateX(-50%)">
          <div style="margin:25px auto; width:270px;line-height:30px"> 手机号:<input v-model="phonenum"
              style="width:200px; height:30px ;border-radius: 5px; padding:0;border:0.02px  soild;float:right" /> <br />
          </div>
          <div style="margin:25px auto; width:270px;line-height:30px;"> 姓名:<input v-model="name"
              style="width:200px; height:30px ;border-radius: 5px;padding:0;border:0.02px  solid;float:right" /><br />
          </div>
          <div style="margin:25px auto; width:270px;line-height:30px"> 学号:<input v-model="xuehao"
              style="width:200px; height:30px ;border-radius: 5px;padding:0;border:0.02px soild;float:right " /><br />
          </div>
          <div style="margin:25px auto; width:270px;line-height:30px"> 学院:
            <select name="" v-model="countryName" @change="change_select"
              style="width:200px; height:30px ;border-radius: 5px; float:right">
              <option v-for="(item, index) in area" v-bind:value="item.name">{{ item.name }}</option>
            </select><br />
          </div>
          <div style="margin:25px auto; width:270px;line-height:30px">
            专业:
            <select name="" v-model="xueyuan" style="width:200px; height:30px;border-radius: 5px;float:right;">
              <option v-for="(item, index) in zhuanye" v-bind:value="item">{{ item }}</option>
            </select><br>
          </div>
          <button @click="submit" style="display:block;width:50px;height:30px ;margin:10px auto">提交</button>
        </div>

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
        <CarPage></CarPage>
      </div>
      <div class="section">
        <PhotoPage></PhotoPage>
      </div>

    </full-page>

  </div>
</template>
 
<script>

import axios from 'axios'
import NavHead from './pc/NavHead'
import PhotoPage from './pc/PhotoPage'
import MesPage from './pc/MesPage'
import CardPage from './pc/CardPage'
import CarPage from './pc/CarPage'
import HelloPage from './pc/HelloPage'
import AwardPage from './pc/AwardPage'
export default {
  name: 'PcPage',
  components: {

    NavHead,
    MesPage,
    CardPage,
    CarPage,
    HelloPage,
    PhotoPage,
    AwardPage
  },
  data() {
    return {
      show: false,
      show2: false,
      sign: false,
      phonenum: "",
      countryName: "",
      xueyuan: "",
      xuehao: "",
      name: "",
      open: false,
      zhuanye: [],
      area: [
        { name: '请选择学院', major: ['请选择专业'] },
        { name: '计算机学院', major: ['请选择专业', '信息与计算机科学', '数据科学与大数据技术', '网络工程', '计算机科学与技术', '软件工程'] },
        { name: '通信学院', major: ['请选择专业', '智能科学与技术', '物联网工程', '电子信息工程', '电子科学与技术', '通信工程'] },
        { name: '电控学院', major: ['请选择专业', '微电子科学与工程', '测控技术与仪器', '电气工程及其自动化', '自动化'] },
        { name: '能源学院', major: ['请选择专业', '建筑环境与能源应用工程', '采矿工程'] },
        { name: '艺术学院', major: ['请选择专业', '设计学类'] },
        { name: '安全学院', major: ['请选择专业', '安全工程', '应急技术与管理', '消防工程'] },
        { name: '人文与外国语学院', major: ['请选择专业', '汉语言文学', '法学', '英语'] },
        { name: '机械学院', major: ['请选择专业', '智能制造工程', '机械电子工程', '机械设计制造及其自动化(卓越)', '机械设计制造及其自动化', '车辆工程'] },
        { name: '材料学院', major: ['请选择专业', '新能源材料与器件', '无机非金属材料工程', '材料科学与工程', '高分子材料与工程'] },
        { name: '地环学院', major: ['请选择专业', '地下水科学与工程', '地质工程', '环境工程', '资源勘查工程'] },
        { name: '继续教育学院', major: ['请选择专业', '少数名族预科'] },
        { name: '理学院', major: ['请选择专业', '工程力学', '数学与应用数学'] },
        { name: '化工学院', major: ['请选择专业', '化学工程与工艺', '应用化学', '矿物加工工程', '能源化学工程'] },
        { name: '建工学院', major: ['请选择专业', '土木工程', '城乡规划', '城市地下空间工程', '建筑学', '给排水科学与工程'] },
        { name: '管理学院', major: ['请选择专业', '会计学', '信息管理与信息系统', '工业工程', '工商管理', '工程管理', '物流管理', '电子商务'] },
        { name: '测绘学院', major: ['请选择专业', '地理信息科学', '测绘工程', '自然地理与资源环境', '遥感科学与技术'] },
      ]
      ,
      options: {
        css3: false,
        autoScrolling: true,
        scrollOverflow: false,
        continuousVertical: false,
        controlArrows: false,
        menu: '.nav',
        scrollBar: false,
        navigation: true,
        navigationPosition: 'right',
        keyboardScrolling: true,
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

      //  this.$refs.fullpage.api.moveSectionDown() 
    },
    submit() {
      console.log(this.name, this.xuehao, this.xueyuan, this.countryName)
      var that = this
      this.$axios.post('http://101.35.193.59:5000/Student/student', {
        name: that.name,
        qq: that.xuehao,
        phone: that.xuehao,
        schoolId: that.xuehao,
        major: that.xueyuan,
        class: that.countryName,
        info: 'test'
      }).then(function (response) {
        console.log('success');

        that.loading = false;
      }).catch(function (error) {
        console.log(error);

      });

    },
    change_select() {
      console.log("test")
      var that = this
      that.xueyuan = ''
      for (var k in that.area) {

        if (this.countryName == that.area[k].name) {
          that.zhuanye = that.area[k].major

        }
      }
    },
    check() {
      const date = new Date();


      const time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
      console.log(time)
      let data2 = "2022-10-1 20:9:41"
      let dates1 = new Date(time);
      let dates2 = new Date(data2);


      if (dates1.getTime() <= dates2.getTime()) {
        this.open = false
      }
      else {
        this.open = true
      }
    }
  }
}
</script>
<style>
.fp-tableCell {
  height: 100vh !important;
}

.section {
  width: 100%;
  height: 100vh !important;
  display: block;

}

.join {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: darkblue;
  text-align: center;
  color: white;
  position: fixed;
  z-index: 9999;
  font-size: 12px
}

.sign {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: indigo;
  text-align: center;
  color: white;
  position: fixed;
  z-index: 9999;
  font-size: 12px
}

.invitejpg {

  position: absolute;

  left: 50%;
  transform: translateX(-50%);

}

.f_tip2 {
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 200;
  background-color: white;

  border-radius: 10px;
}

@media only screen and (min-width: 1200px) {
  .logo {
    width: 60px;
    height: 60px;
    vertical-align: center;
    margin: 0 20px;
  }

  .f_tip1 {
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 200;
    background-color: white;
    width: 600px;
    height: 400px;
    border-radius: 10px;
  }

  .header {
    width: 100%;
    height: 80px;
    background-color: rgba(23, 21, 21, 0.8);
    display: flex;
    color: rgb(212, 208, 208);
    font-size: 24px;
    font-family: 'Google Sans', 'Noto Sans';
    position: absolute;
    z-index: 200;
    top: 0px;
    align-items: center;
  }

  .sign {
    width: 50px;
    height: 50px;
    right: 10px;
    bottom: 30px;
    cursor: pointer;
  }

  .join {
    width: 50px;
    height: 50px;
    right: 10px;
    bottom: 100px;
    cursor: pointer;
  }


  .invitejpg {
    width: 150px;
    height: 230px;

    bottom: 50px
  }

  .tit :nth-child(1) {
    font-size: 50px;
    color: white;
    margin-top: 30px;
  }

  .tit :nth-child(2) {
    font-size: 15px;
    color: rgb(4, 23, 92);
    margin-top: 10px;
    font-family: '宋体';
    font-weight: 700;
  }

  .tit :nth-child(3) {
    font-size: 25px;
    color: white;
    margin-top: 30px;
  }

  .tit {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100vw;
    height: 200px;
    background-color: rgba(78, 113, 143, 0.5);
  }

  .f_tip2 {
    width: 400px;
    height: 450px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {

  .logo {
    width: 60px;
    height: 60px;
    vertical-align: center;
    margin: 0 20px;
  }

  .header {
    width: 100%;
    height: 10vh;
    background-color: rgba(23, 21, 21, 0.8);
    display: flex;
    color: rgb(212, 208, 208);
    font-size: 1.2rem;
    font-family: 'Google Sans', 'Noto Sans';
    position: absolute;
    z-index: 200;
    top: 0px;
    align-items: center;
  }

  .join {
    width: 50px;
    height: 50px;
    right: 10px;
    bottom: 100px;
  }

  .sign {
    width: 50px;
    height: 50px;
    right: 10px;
    bottom: 10px;
  }

  .f_tip2 {
    width: 400px;
    height: 450px;
  }

  .invitejpg {
    width: 150px;
    height: 230px;

    bottom: 50px
  }

  .tit :nth-child(3) {
    font-size: 25px;
    color: white;
    margin-top: 30px;
  }

  .tit :nth-child(1) {
    font-size: 50px;
    color: white;
    margin-top: 30px;
  }

  .tit :nth-child(2) {
    font-size: 15px;
    color: rgb(4, 23, 92);
    margin-top: 10px;
    font-family: '宋体';
    font-weight: 700;
  }

  .tit {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100vw;
    height: 200px;
    background-color: rgba(78, 113, 143, 0.5);
  }

  .tit :nth-child(3) {
    font-size: 25px;
    color: white;

    margin-top: 30px;
  }
}




@media only screen and (max-width: 900px) {
  .logo {
    width: 10vw;
    height: 10vw;
    vertical-align: center;
    margin: 0 2vw;
  }

  .f_tip1 {
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 200;
    background-color: white;
    width: 80vw;
    height: 60vh;
    border-radius: 10px;
  }

  .header {
    width: 100%;
    height: 10vh;
    background-color: rgba(23, 21, 21, 0.8);
    display: flex;
    color: rgb(212, 208, 208);
    font-size: 1.2rem;
    font-family: 'Google Sans', 'Noto Sans';
    position: absolute;
    z-index: 200;
    top: 0px;
    align-items: center;
  }

  .join {
    width: 15vw;
    height: 15vw;
    right: 3vw;
    bottom: 20vh;
  }

  .sign {
    width: 15vw;
    height: 15vw;
    right: 3vw;
    bottom: 10vh;
  }

  .invitejpg {
    width: 40vw;
    height: 60vw;

    bottom: 50px
  }

  .tit :nth-child(1) {
    font-size: 2.5rem;
    color: white;
    margin-top: 3vh;
  }

  .tit :nth-child(2) {
    font-size: 0.8rem;
    color: rgb(4, 23, 92);
    margin-top: 10px;
    font-family: '宋体';
    font-weight: 700;
  }

  .tit :nth-child(3) {
    font-size: 1.5rem;
    color: white;

    margin-top: 2vh;
  }

  .tit {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100vw;
    height: 30vh;
    background-color: rgba(78, 113, 143, 0.5);
  }

  .f_tip2 {
    width: 90vw;
    height: 60vh;
  }
}
</style>
