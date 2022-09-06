<template>
    <div style="height:100vh; width:100vw;background-color:black">
        <div style="width:100%;height:0.01vh;"></div>
        <h2
            style="width:100%; text-align:center ;margin :3vh auto  ;color: #fafafa;font-size:2rem;
letter-spacing: 0;
text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135">
            我们参加的比赛</h2>

        <div style="width:90%  margin:2% auto;color:white;font-size:0.4rem">
            <div style="width:100% ;height:15vh;  margin:0.5vh auto;" @click="enterBlock($event)"
                @mouseleave="leaveBlock($event)">
                <div class="mes_pic">

                    <img src='../../assets/card.jpg'
                        style='width:100%;height:100% ;   -webkit-mask: linear-gradient(to left, transparent, #000);' />
                </div>

                <div style="margin-left:2%; width:65% ;display: inline-block;">
                    <p className='break-words text-center mb-4'>国际大学生程序设计竞赛</p>
                    (英语:International Collegiate Programming Contest,ICPC)
                    是一项旨在展示大学生创新能力团队精神和在压力下编写程序，
                </div>

            </div>
            <div style="width:100% ;height:15vh;  margin:0.5vh auto;" @click="enterBlock($event)"
                @mouseleave="leaveBlock($event)">


                <div style="margin-left:2%; width:65% ;display: inline-block;">
                    <p className='break-words text-center mb-4'>国际大学生程序设计竞赛</p>
                    (英语:International Collegiate Programming Contest,ICPC)
                    是一项旨在展示大学生创新能力团队精神和在压力下编写程序，
                </div>
                <div class="mes_pic">

                    <img src='../../assets/card.jpg'
                        style='width:100%;height:100% ;   -webkit-mask: linear-gradient(to left, transparent, #000);' />
                </div>
            </div>
            <div style="width:100% ;height:15vh;  margin:0.5vh auto;" @click="enterBlock($event)"
                @mouseleave="leaveBlock($event)">
                <div class="mes_pic">

                    <img src='../../assets/card.jpg'
                        style='width:100%;height:100% ;   -webkit-mask: linear-gradient(to left, transparent, #000);' />
                </div>

                <div style="margin-left:2%; width:65% ;display: inline-block;">
                    <p className='break-words text-center mb-4'>国际大学生程序设计竞赛</p>
                    (英语:International Collegiate Programming Contest,ICPC)
                    是一项旨在展示大学生创新能力团队精神和在压力下编写程序，
                </div>

            </div>
            <div style="width:100% ;height:15vh;  margin:0.5vh auto;" @click="enterBlock($event)"
                @mouseleave="leaveBlock($event)">

                <div style="margin-left:2%; width:65% ;display: inline-block;">
                    <p className='break-words text-center mb-4'>国际大学生程序设计竞赛</p>
                    (英语:International Collegiate Programming Contest,ICPC)
                    是一项旨在展示大学生创新能力团队精神和在压力下编写程序，
                </div>
                <div class="mes_pic">

                    <img src='../../assets/card.jpg'
                        style='width:100%;height:100% ;   -webkit-mask: linear-gradient(to left, transparent, #000);' />
                </div>

            </div>
            <div style="width:100% ;height:15vh;  margin:0.5vh auto;" @click="enterBlock($event)"
                @mouseleave="leaveBlock($event)">
                <div class="mes_pic">

                    <img src='../../assets/card.jpg'
                        style='width:100%;height:100% ;   -webkit-mask: linear-gradient(to left, transparent, #000);' />
                </div>

                <div style="margin-left:2%; width:65% ;display: inline-block;">
                    <p className='break-words text-center mb-4'>国际大学生程序设计竞赛</p>
                    (英语:International Collegiate Programming Contest,ICPC)
                    是一项旨在展示大学生创新能力团队精神和在压力下编写程序，
                </div>

            </div>
            <div style="width:100% ;height:15vh;  margin:0.5vh auto;" @click="enterBlock($event)"
                @mouseleave="leaveBlock($event)">

                <div style="margin-left:2%; width:65% ;display: inline-block;">
                    <p className='break-words text-center mb-4'>国际大学生程序设计竞赛</p>
                    (英语:International Collegiate Programming Contest,ICPC)
                    是一项旨在展示大学生创新能力团队精神和在压力下编写程序，
                </div>
                <div class="mes_pic">

                    <img src='../../assets/card.jpg'
                        style='width:100%;height:100% ;   -webkit-mask: linear-gradient(to left, transparent, #000);' />
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
<style>
.mes_pic {
    width: 30vw;
    height: 15vw;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000000 100%);
    margin-left: 2%;
    float: right;
}
</style>