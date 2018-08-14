<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(picitem,index) in items" :key="index">
            <img :src="picitem.src" alt="">
        </swiper-slide>
    </swiper>
</template>

<script>
    import {swiper, swiperSlider} from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                swiperOption: {
                    notNextTick: true,
                    loop: true,
                    autoplay: true,
                    speed: 1000,
                    direction: 'horizontal',
                    grabCursor: true,
                    setWrapperSize: true,
                    autoHeight: true,
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    mousewheelControl: true,
                    observeParents: true,
                    debugger: true
                },
                items: [
                    {src: 'https://bpic.588ku.com/element_banner/20/18/07/2a56970783f8344f9dd75e5b39ab0090.jpg'},
                    {src: 'https://bpic.588ku.com/element_banner/20/18/07/2d67399a3a4e48d2e439247eadf970b2.jpg'},
                    {src: 'https://bpic.588ku.com/element_banner/20/18/07/7a837550524934f1386f4cf33ae67dd1.jpg'},
                    {src: 'https://bpic.588ku.com/element_banner/20/18/07/cdd57b86930eb2e9b67d95a0fc308881.jpg'},
                    {src: 'https://bpic.588ku.com/element_banner/20/18/07/643f3e25812e07a47ac68d3e9b33df58.jpg'}
                ],
            }
        },
        components: {
            swiper,
            swiperSlider
        }
    }
</script>

<style scoped>

</style>