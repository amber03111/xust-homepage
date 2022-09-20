<template>
    <div style="height:100vh; width:100%;
background-image: linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);
color:white">
      <div style="width:100%;height:3px;"></div><br />
        <h2
            style="width:100%; text-align:center ;margin :2vh auto;color: #fafafa;font-size:2.5vw;
letter-spacing: 0;
text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135">
           来玩玩小车</h2>


           <div class="sign_bac2" style="margin:0 auto " >
				<a href="http://car.xust-kcsoft.club" style="display:block; color:white" target="blank">

					<div	class="c_mask">
						<p class="c_tit">
							去玩玩小车</p>
					</div>
				</a>
			</div>

    </div>
</template>
<script>
export default {
    name: 'CarPage',
 
}

</script>
<style>
	@media only screen and (min-width: 1200px) {
		.sign_bac2 {
	position: relative;
	width: 400px;
	height: 200px;
	background-image: url(../../assets/car.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;

}
 .c_mask{
	background-color: rgba(0, 0, 0, 0.5);width:400px;height:200px;position:absolute;top:0px;z-index:400
 }
 .c_tit{
	background-color: rgba(255, 255, 255, 0.5);width:100px;height:50px;line-height:50px;text-align:center;border-radius:10px; position:absolute;top:50%; left:50%; transform: translate(-50%,-50%);
 }
}

@media only screen and (min-width: 900px) and (max-width: 1199px) {
	.sign_bac2 {
	position: relative;
	width: 400px;
	height: 200px;
	background-image: url(../../assets/car.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;

}
 .c_mask{
	background-color: rgba(0, 0, 0, 0.5);width:400px;height:200px;position:absolute;top:0px;z-index:400
 }
 .c_tit{
	background-color: rgba(255, 255, 255, 0.5);width:100px;height:50px;line-height:50px;text-align:center;border-radius:10px; position:absolute;top:50%; left:50%; transform: translate(-50%,-50%);
 }

 
}




@media only screen and (max-width:900px) {
	.c_mask{
	background-color: rgba(0, 0, 0, 0.5);width:90vw;height:30vw;position:absolute;top:0px;z-index:400
 }
  
   .c_tit{
	background-color: rgba(255, 255, 255, 0.5);width:30vw;height:18vw;line-height:18vw;text-align:center;border-radius:10px; position:absolute;top:50%; left:50%; transform: translate(-50%,-50%);
 }
 .sign_bac2 {
	position: relative;
	width:90vw;
	height:30vw;
	background-image: url(../../assets/car.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;

}
}
</style>