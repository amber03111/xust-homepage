<template>

	<div class="sign_bac1">
		<div style="height:40px;width:100%"></div>
		<h1 style="width:100% ;text-align: center; " id="flash">西安科技大学校软件实验室考核报名</h1>

		<div style="position:absolute; left:10%; top:20%;  ">
			<h1>嗨 👋 欢迎加入校软件实验室</h1>
			<br />
			<br />
			<br />
			<div class="sign_bac2">
				<a href="http://car.xust-kcsoft.club" style="display:block; color:white" target="blank">

					<div
						style="background-color: rgba(0, 0, 0, 0.5);width:400px;height:200px;position:absolute;top:0px;z-index:400">
						<p
							style="background-color: rgba(255, 255, 255, 0.5);width:100px;height:50px;line-height:50px;text-align:center;border-radius:10px; position:absolute;top:50%; left:50%; transform: translate(-50%,-50%); ">
							去玩玩小车</p>
					</div>
				</a>
			</div>
		</div>
		<div
			style="width:40%;min-width:350px; background-color: rgba(0, 0, 0, 0.5); color:aliceblue ;height:350px;position:absolute;right:5%;top:100px ;">
			<div  v-if="!over" style="text-align:center;line-height:350px;">
				考核报名暂未开始，请加入招新群了解详细信息
			</div>
			<div v-if="over">
			<div style="margin:25px auto; width:270px;line-height:30px"> 手机号:<input v-model="phonenum"
					style="width:200px; height:30px ;border-radius: 5px; padding:0;border:0 ;float:right" /> <br />
			</div>
			<div style="margin:25px auto; width:270px;line-height:30px"> 姓名:<input v-model="name"
					style="width:200px; height:30px ;border-radius: 5px;padding:0;border:0 ;float:right" /><br /></div>
			<div style="margin:25px auto; width:270px;line-height:30px"> 学号:<input v-model="xuehao"
					style="width:200px; height:30px ;border-radius: 5px;padding:0;border:0;float:right" /><br /></div>
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
		</div>
	</div>





</template>
<script>
export default {
	data() {
		return {
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

		}
	},
	mounted() {
		this.check()
	},
	methods: {
		submit() {
			console.log(this.name,this.xuehao,this.xueyuan, this.countryName)
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
				this.open=false
			} 
			else {
				this.open=true
			}
		}
	}


}
</script>
<style>
.sign_bac1 {
	width: 100%;
	height: 100vh;
	min-width: 100%;
	background-image: url(../../assets/bac.jpg);
	background-repeat: no-repeat;
	background-size: 100% 100%;
	position: relative
}

.sign_bac2 {
	position: relative;
	width: 400px;
	height: 200px;
	background-image: url(../../assets/car.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;

}

#flash {

	font-family: "华文隶书", "STLiti "
}
</style>


