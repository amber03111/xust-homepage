
<template>

  <div id="app">
  <router-view></router-view>

  </div>
</template>
 
<script>

export default {
  name: 'App',
  components: {
 
  },
  data() {
    return {
      options: {
        css3: false,
        
      }
    }
  },
  mounted() {
    if (this._isMobile()) {
      
      this.$router.push('/mobile');
    } else {
    
      this.$router.push('/pc');
    }
  },
  methods:{
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }

  }

}
</script>
 <style>
 .section {
  width:100%;
  height:100vh;
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
