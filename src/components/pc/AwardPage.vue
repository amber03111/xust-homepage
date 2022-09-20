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
      
            <div class="h_race" @click="enterBlock($event)"
                @mouseleave="leaveBlock($event)">
                <div
                   class="mes_pic">
                    <img src="../../assets/card.jpg" style=" width:100%;height:100%" />
                </div>
                <div class="h_message">
                    <p className='h_mes'>国际大学生程序设计竞赛</p>
                    (英语:International Collegiate Programming Contest,ICPC)
                    是一项旨在展示大学生创新能力团队精神和在压力下编写程序，


                </div>
            </div>
            <div class="h_race" @click="enterBlock($event)"
                @mouseleave="leaveBlock($event)">
                <div
                   class="mes_pic">
                    <img src="../../assets/card.jpg" style=" width:100%;height:100%" />
                </div>
                <div class="h_message">
                    <p className='h_mes'>国际大学生程序设计竞赛</p>
                    (英语:International Collegiate Programming Contest,ICPC)
                    是一项旨在展示大学生创新能力团队精神和在压力下编写程序，


                </div>
            </div>
            <div class="h_race" @click="enterBlock($event)"
                @mouseleave="leaveBlock($event)">
                <div
                   class="mes_pic">
                    <img src="../../assets/card.jpg" style=" width:100%;height:100%" />
                </div>
                <div class="h_message">
                    <p className='h_mes'>国际大学生程序设计竞赛</p> 
                    (英语:International Collegiate Programming Contest,ICPC)
                    是一项旨在展示大学生创新能力团队精神和在压力下编写程序，


                </div>
            </div>

            <div class="h_race" @click="enterBlock($event)"
                @mouseleave="leaveBlock($event)">
                <div
                   class="mes_pic">
                    <img src="../../assets/card.jpg" style=" width:100%;height:100%" />
                </div>
                <div class="h_message">
                    <p className='h_mes'>国际大学生程序设计竞赛</p>
                    (英语:International Collegiate Programming Contest,ICPC)
                    是一项旨在展示大学生创新能力团队精神和在压力下编写程序，


                </div>
            </div>
            <div class="h_race" @click="enterBlock($event)"
                @mouseleave="leaveBlock($event)">
                <div
                   class="mes_pic">
                    <img src="../../assets/card.jpg" style=" width:100%;height:100%" />
                </div>
                <div class="h_message">
                    <p className='h_mes'>国际大学生程序设计竞赛</p>
                    (英语:International Collegiate Programming Contest,ICPC)
                    是一项旨在展示大学生创新能力团队精神和在压力下编写程序，


                </div>
            </div>
            <div class="h_race" @click="enterBlock($event)"
                @mouseleave="leaveBlock($event)">
                <div
                   class="mes_pic">
                    <img src="../../assets/card.jpg" style=" width:100%;height:100%" />
                </div>
                <div class="h_message">
                    <p className='h_mes'>国际大学生程序设计竞赛</p>
                    (英语:International Collegiate Programming Contest,ICPC)
                    是一项旨在展示大学生创新能力团队精神和在压力下编写程序，


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
    @media only screen and (min-width: 1200px) {
       .h_race{
        margin:2vh auto ;
        width:44vw;
        padding:0 2vw;
        height:28vh;
        display:inline-block;
      
       }
.mes_pic{
    float:left;
    width:15vw;
     height:9vw ; 
    -webkit-mask: linear-gradient(to left, transparent, #000);
}
.mes_pic img{
    width:100%;height:100%
}
.h_message{
    float:left;margin-left:10px; width:60%;

}
}

@media only screen and (min-width: 900px) and (max-width: 1199px) {

    .h_race{
        margin:2vh auto ;
        width:44%;
        padding:0 2%;
        height:28vh;
        display:inline-block;
        font-size: 0.4rem;
       }
.mes_pic{
    float:left;
     width:15vw;
     height:9vw ; 
    -webkit-mask: linear-gradient(to left, transparent, #000);
}
.mes_pic img{
    width:100%;height:100%
}
.h_message{
    float:left;margin-left:10px; width:60%;
    font-size:1rem;

}

}




@media only screen and (max-width: 900px) {
    .mes_pic {
    width: 30vw;
    height: 15vw;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000000 100%);
    margin-left: 2%;
    float: left;
}
.h_race{
   width:100% ;height:15vh;
     margin:0.5vh auto;
   font-size: 0.4rem;
}
.h_message{
    margin-left:2%; 
    width:65% ;
    float:left;

}
}
</style>