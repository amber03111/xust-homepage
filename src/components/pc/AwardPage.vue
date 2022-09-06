<template>
    <div style="height:100vh; width:100%;
background-image: linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);
color:white">
        <div style="width:100%;height:10px;"></div>
        <h2
            style="width:100%; text-align:center ;margin :2vh auto;color: #fafafa;font-size:2.5vw;
letter-spacing: 0;
text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135">
            我们参加的比赛</h2>
        <div style="width:50% ;float:left">
            <div style="width:50% ;margin:2vh auto ;width:550px;height:28vh;" @click="enterBlock($event)"
                @mouseleave="leaveBlock($event)">
                <div
                    style="float:left; width:200px;height:120px ; -webkit-mask: linear-gradient(to left, transparent, #000);">
                    <img src="../../assets/card.jpg" style=" width:200px;height:120px" />
                </div>
                <div style="float:right;margin-left:30px; width:300px">
                    <p className='break-words text-center mb-4'>国际大学生程序设计竞赛</p>
                    (英语:International Collegiate Programming Contest,ICPC)
                    是一项旨在展示大学生创新能力团队精神和在压力下编写程序，


                </div>
            </div>
            <div style=" margin:2vh auto ;width:550px;height:28vh;" @click="enterBlock($event)"
                @mouseleave="leaveBlock($event)">
                <div
                    style="float:left; width:200px;height:120px; -webkit-mask: linear-gradient(to left, transparent, #000);">
                    <img src="../../assets/card.jpg" style=" width:200px;height:120px" />
                </div>
                <div style="float:right;margin-left:30px; width:300px">
                    <p className='break-words text-center mb-4'>国际大学生程序设计竞赛</p>
                    (英语:International Collegiate Programming Contest,ICPC)
                    是一项旨在展示大学生创新能力团队精神和在压力下编写程序，


                </div>
            </div>

            <div style=" margin:2vh auto ;width:550px;height:28vh;" @click="enterBlock($event)"
                @mouseleave="leaveBlock($event)">
                <div style="float:left; width:200px;height:120px">
                    <img src="../../assets/card.jpg" style=" width:200px;height:120px" />
                </div>
                <div style="float:left;margin-left:30px;width:300px">
                    <p className='break-words text-center mb-4'>国际大学生程序设计竞赛</p>
                    (英语:International Collegiate Programming Contest,ICPC)
                    是一项旨在展示大学生创新能力团队精神和在压力下编写程序，


                </div>
            </div>
        </div>
        <div style="width:50% ;display:inline-block">
            <div style="width:50% ;margin:2vh auto ;width:550px;height:28vh;" @click="enterBlock($event)"
                @mouseleave="leaveBlock($event)">
                <div style="float:left; width:200px;height:120px">
                    <img src="../../assets/card.jpg" style=" width:200px;height:120px" />
                </div>
                <div style="float:right;margin-left:30px; width:300px">
                    <p className='break-words text-center mb-4'>国际大学生程序设计竞赛</p>
                    (英语:International Collegiate Programming Contest,ICPC)
                    是一项旨在展示大学生创新能力团队精神和在压力下编写程序，


                </div>
            </div>
            <div style=" margin:2vh auto ;width:550px;height:28vh;" @click="enterBlock($event)"
                @mouseleave="leaveBlock($event)">
                <div style="float:left; width:200px;height:120px">
                    <img src="../../assets/card.jpg" style=" width:200px;height:120px" />
                </div>
                <div style="float:right;margin-left:30px; width:300px">
                    <p className='break-words text-center mb-4'>国际大学生程序设计竞赛</p>
                    (英语:International Collegiate Programming Contest,ICPC)
                    是一项旨在展示大学生创新能力团队精神和在压力下编写程序，


                </div>
            </div>

            <div style=" margin:2vh auto ;width:550px;height:28vh;" @click="enterBlock($event)"
                @mouseleave="leaveBlock($event)">
                <div style="float:left; width:200px;height:120px">
                    <img src="../../assets/card.jpg" style=" width:200px;height:120px" />
                </div>
                <div style="float:left;margin-left:30px;width:300px">
                    <p className='break-words text-center mb-4'>国际大学生程序设计竞赛</p>
                    (英语:International Collegiate Programming Contest,ICPC)
                    是一项旨在展示大学生创新能力团队精神和在压力下编写程序，


                </div>
            </div>
        </div>


    </div>
</template>
<script>
export default {
    name: 'AwardPage',
    methods: {
        enterBlock(event) {
            event.currentTarget.classList.add('animate__flipOutX')
        },
        leaveBlock(event) {
            event.currentTarget.classList.remove('animate__flipOutX')
        },
    }
}
</script>