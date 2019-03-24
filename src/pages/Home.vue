<template>
    <div>
        <v-header></v-header>
        <div class="content">
            <v-slider></v-slider>
        </div>
    </div>
</template>
<script>
import Header from '../components/Header.vue'
import Slider from '../components/Slider.vue'
import Footer from '../components/Footer.vue'

export default {
    name:'Home',
    components:{
        'v-header':Header,
        'v-footer':Footer,
        'v-slider':Slider,
    }    
}
</script>
<style>

</style>

