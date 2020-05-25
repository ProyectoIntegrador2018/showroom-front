<template>
	<div class="container">
		<div class="row h-100">
			<div class="num col-sm">
				<animated-number :value="val1" :formatValue="func" :easing="easing" :duration="duration"/>
				<p class="num-title">{{titles1}}</p>
			</div>
			<div class="num col-sm">
				<animated-number :value="val2" :formatValue="func" :easing="easing" :duration="duration"/>
				<p class="num-title">{{titles2}}</p>
			</div>
			<div class="num col-sm">
				<animated-number :value="val3" :formatValue="func" :easing="easing" :duration="duration"/>
				<p class="num-title">{{titles3}}</p>
			</div>
		</div>
	</div>
</template>



<script>

import {mapState} from 'vuex';
import AnimatedNumber from 'animated-number-vue';

	export default{
		name:"Numbers",
		components:{
			AnimatedNumber
		},
		data() {
			return{
				easing: 'easeOutCirc',
				duration: 1500,
				title1: 'hue'
			}
		},
		computed:{
			...mapState(['title_cont_1','title_cont_2','title_cont_3','cont_1','cont_2','cont_3']),
			
		},
		methods:{
			func(num){
				return num.toFixed(0);
			}
		},
		props: {
		titles1: String,
		titles2: String,
		titles3: String,
		val1: String,
		val2: String,
		val3: String
		},
		
	}
</script>

<style >
	.num-title{
		font-size: 20px;
		padding: 0px;
	}

</style>