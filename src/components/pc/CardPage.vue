<template>
    <div style="position:relative;width:100%;height:100vh;">
        <div class="pie" @click="showtips=true">
            <div id="myCiYun"></div>
        </div>

        <div class="tips" @click="showtips = !showtips">
            <transition name="fade" enter-active-class="animate__animated animate__rollIn"
                leave-active-class="animate__animated animate__rotateOut">
                <div>
                    {{this.show_data}}
                </div>
            </transition>
        </div>


    </div>
</template>

<script>

import 'echarts-wordcloud';
const echarts = require("echarts");
export default {
    created() {
        this.initData()
    },
    data() {
        return {
            showtips: false,
            show_data: "1",
            range: [17, 55],
            savetips: [{ title: "123", mes: "12345" }, { title: "123", mes: "12345" }]
        }
    },

    mounted() {

        this.changeWidth();
        this.initData();
    },
    methods: {
        changeWidth() {
            if (document.body.clientWidth >= 900) {
                this.range = [17, 50],
                    this.initData();
            }
            if (document.body.clientWidth <= 900) {
                this.range = [12, 25]
                this.initData();
            }
        },
        initData() {
            // 基于准备好的dom，初始化echarts实例
            if (myChart != null && myChart != "" && myChart != undefined) {
                myChart.dispose();
            }

            var myChart = echarts.init(document.getElementById('myCiYun'))
            var maskImage = new Image();
            var range = this.range
            maskImage.src = "data:image/png;base64,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"

            var option = {
                backgroundColor: 'white',

                series: [{
                    name: '热点分析',
                    gridSize: 1,
                    type: 'wordCloud',
                    size: ['9%', '99%'],
                    sizeRange: range,
                    rotationRange: [0, 0],
                    left: 'center',
                    top: 'center',
                    right: null,
                    bottom: null,

                    maskImage: maskImage,
                    textPadding: 0,
                    autoSize: {
                        enable: true,
                        minSize: 25
                    },
                    textStyle: {
                        normal: {
                            color: function () {
                                return 'rgb(' + [
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160)
                                ].join(',') + ')';
                            }
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: [
                        {
                            name: "前端",
                            value: "91",
                            num: "1"
                        }, {
                            name: "后端",
                            value: "90",
                            num: "1"
                        }, {
                            name: "算法",
                            value: "92",
                            num: "2"
                        }, {
                            name: "函数式编程",
                            value: "83"
                        }, {
                            name: "C语言",
                            value: "89"
                        },

                        {
                            name: "C++",
                            value: "88"
                        },
                        {
                            name: "C#",
                            value: "87"
                        },
                        {
                            name: "JAVA",
                            value: "88"
                        },

                        {
                            name: "Javascript",
                            value: "86"
                        },
                        {
                            name: "websocket",
                            value: "82"
                        },
                        {
                            name: "Three.js",
                            value: "80"
                        },
                        {
                            name: "Vue",
                            value: "79"
                        },
                        {
                            name: "Docker",
                            value: "79"
                        },
                        {
                            name: "Next.js",
                            value: "78"
                        },
                        {
                            name: "unity",
                            value: "80"
                        },
                        {
                            name: "Spring Boot",
                            value: "81"
                        },
                        {
                            name: "HTTP/TCP",
                            value: "77"
                        }, {
                            name: "Python",
                            value: "86"
                        },
                        {
                            name: "Redux",
                            value: "85"
                        },

                        {
                            name: "C语言",
                            value: "80"
                        },
                        {
                            name: "C++",
                            value: "70"
                        },
                        {
                            name: "C#",
                            value: "70"
                        },
                        {
                            name: "JAVA",
                            value: "70"
                        },
                        {
                            name: "Javascript",
                            value: "70"
                        },
                        {
                            name: "websocket",
                            value: "70"
                        },
                        {
                            name: "Three.js",
                            value: "70"
                        },
                        {
                            name: "C++",
                            value: "70"
                        },
                        {
                            name: "C#",
                            value: "70"
                        },
                        {
                            name: "JAVA",
                            value: "70"
                        },
                        {
                            name: "Javascript",
                            value: "70"
                        },
                        {
                            name: "websocket",
                            value: "70"
                        },
                        {
                            name: "Three.js",
                            value: "70"
                        },
                        {
                            name: "Vue",
                            value: "70"
                        },
                        {
                            name: "Docker",
                            value: "70"
                        },
                        {
                            name: "Next.js",
                            value: "70"
                        },
                        {
                            name: "unity",
                            value: "70"
                        },
                        {
                            name: "Spring Boot",
                            value: "70"
                        },
                        {
                            name: "HTTP/TCP",
                            value: "70"
                        }, {
                            name: "Python",
                            value: "79"
                        },
                        {
                            name: "Redux",
                            value: "70"
                        },
                        {
                            name: "Spring Boot",
                            value: "70"
                        },
                        {
                            name: "HTTP/TCP",
                            value: "70"
                        }, {
                            name: "Python",
                            value: "79"
                        },
                        {
                            name: "Redux",
                            value: "70"
                        },

                        {
                            name: "C++",
                            value: "70"
                        },
                        {
                            name: "C#",
                            value: "70"
                        },
                        {
                            name: "JAVA",
                            value: "70"
                        },
                        {
                            name: "Javascript",
                            value: "70"
                        },
                        {
                            name: "websocket",
                            value: "70"
                        },
                        {
                            name: "Three.js",
                            value: "70"
                        },
                        {
                            name: "Vue",
                            value: "70"
                        },
                        {
                            name: "Docker",
                            value: "70"
                        },
                        {
                            name: "Next.js",
                            value: "70"
                        },
                        {
                            name: "unity",
                            value: "70"
                        },
                        {
                            name: "Spring Boot",
                            value: "70"
                        },
                        {
                            name: "HTTP/TCP",
                            value: "70"
                        }, {
                            name: "Python",
                            value: "79"
                        },
                        {
                            name: "Redux",
                            value: "70"
                        },


                    ]
                }]
            };
            myChart.setOption(option)
            myChart.on('click', (params) => {
                this.showtips = true;
                console.log(this.showtips)
                console.log('myChart:', params, '------', params.data, '---', params.name)

                if (params.name == '前端') {



                    this.changetip(params.name)
                    this.show_data = params.name
                    console.log(this.show_data)
                }
                else if (params.name == '后端') {

                    this.changetip(params.name)
                    this.show_data = params.name
                    console.log(this.show_data)
                }
                else if (params.name == '算法') {

                    this.changetip(params.name)
                    this.show_data = params.name
                    console.log(this.show_data)
                }

            });

        },
        changetip(tip_name) {
            this.show_data = tip_name
            console.log("xiugaile")
            console.log(this.show_data)
        }
    }
}
</script>

<style>
@media only screen and (min-width: 1200px) {
    #myCiYun {
        width: 800px;
        height: 500px;
        display: inline-block;
        margin: 0;
    }

    .pie {
        width: 800px;
        height: 600px;
    }

    .tips {
        position: absolute;
        top: 10%;
        right: 40px;
        color: white;
        width: 400px;
        height: 300px;
        background-color: blue
    }
}

@media only screen and (min-width: 900px) and (max-width: 1199px) {


    #myCiYun {
        width: 800px;
        height: 600px !important;
        display: inline-block;
        margin: 0 20%;
    }
}




@media only screen and (max-width:900px) {
    #myCiYun {
        min-width: 300px;
        min-height: 300px;
        width: 95vw;
        height: 75vw;
        display: inline-block;
        margin: 0 2.5vw;
    }

    .pie {
        width: 100%;
        height: 100%;
    }

    .tips {
        position: absolute;
        bottom: 40px;
        color: white;
        width: 95vw;
        height: 40vh;
        background-color: blue
    }
}
</style>