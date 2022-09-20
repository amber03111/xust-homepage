<template>


</template>
<script>
    export default {
  name: 'PC',
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