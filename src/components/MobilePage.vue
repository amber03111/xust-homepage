
<template>

  <div id="app">
    <header class="header">
      <img src="../assets/logo.png" class="logo" />
      <span>校软件实验室</span>&nbsp;
      <span>kcsoft-club</span>
    </header>
    
        <NavHead></NavHead>

        <MesPage></MesPage>
      
    
        <HelloPage></HelloPage>
      
    

        <CardPage></CardPage>


        <AwardPage></AwardPage>
        <PhotoPage></PhotoPage>

     

  </div>
</template>
 
<script>
import NavHead from './mobile/NavHead'
import PhotoPage from './mobile/PhotoPage'
import MesPage from './mobile/MesPage.vue'
import CardPage from './mobile/CardPage'
import HelloPage from './mobile/HelloPage'
import AwardPage from './mobile/AwardPage'
export default {
  name: 'PC',
  components: {
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
    }
  }
}
</script>
 <style>
 .section {
   width: 100vw;
   height: 100vh;
   display: block;
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
