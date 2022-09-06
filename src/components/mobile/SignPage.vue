<template>

	<div class="pic_1"
		style="width:100vw;height:100vh;background-repeat: no-repeat;background-size: 100% 100%; position:relative">
			<h1>嗨 👋 欢迎加入校软件实验室</h1>
		
		<div
			style="width:90%; background-color: rgba(0, 0, 0, 0.5); color:aliceblue ;height:60vh;margin:5vh auto ;">
			<br/>
			<br/>
			
			<div style="margin:4vh auto; width:90%;line-height:4vh"> 手机号:<input v-model="phonenum"
					style="width:80%; height:4vh ;border-radius: 5px; padding:0;border:0 ;float:right" /> <br />
			</div>
			<div style="margin:4vh auto; width:90%;line-height:4vh"> 姓名:<input v-model="name"
					style="width:80%; height:4vh ;border-radius: 5px;padding:0;border:0 ;float:right" /><br /></div>
			<div style="margin:4vh auto; width:90%;line-height:4vh"> 学号:<input v-model="xuehao"
					style="width:80%; height:4vh ;border-radius: 5px;padding:0;border:0;float:right" /><br /></div>
			<div style="margin:4vh auto; width:90%;line-height:4vh"> 学院:
				<select name="" v-model="countryName" @change="change_select"
					style="width:80%; height:4vh ;border-radius: 5px; float:right">
					<option v-for="(item, index) in area" v-bind:value="item.name">{{  item.name  }}</option>
				</select><br />
			</div>
			<div style="margin:4vh auto; width:90%;line-height:4vh">
				专业:
				<select name="" v-model="cityName" style="width:80%; height:4vh;border-radius: 5px;float:right;">
					<option v-for="(item, index) in cityNames" v-bind:value="item">{{  item  }}</option>
				</select><br>
			</div>
			<button @click="submit" style="display:block;width:50px;height:4vh ;margin:10px auto">提交</button>
		</div>
	</div>





</template>
<script>
export default {
	data() {
		return {
			phonenum: "",
			countryName: "",
			cityName: "",
			xuehao: "",
			name: "",
			cityNames: [],
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

		}
	},
	methods: {
		submit() {
			console.log(this.cityName, this.countryName)
		},
		change_select() {
			console.log("test")
			var that = this
			that.cityName = ''
			for (var k in that.area) {

				if (this.countryName == that.area[k].name) {
					that.cityNames = that.area[k].major

				}
			}
		}
	}


}
</script>
<style>
	.pic_1{
		background-image: url(../../assets/home.jpg);
	}
</style>


