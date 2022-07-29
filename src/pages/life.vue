<script setup lang="ts">
import { reactive, ref } from 'vue'

let timer: NodeJS.Timer | null = null
let open = ref(false)
let currentImage = ref(0)
const imagesArr = reactive( [
        'https://images.unsplash.com/photo-1599058917677-0adfe92e05f2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1949&q=80',
        'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80',
        'https://images.unsplash.com/photo-1599058917727-824293170100?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80',
        ])

onMounted(() => {
  timer = setInterval(() => {
    console.log('----setInterval----')
    imagebackFun()
  }, 3000)
})

const imagebackFun = () => {
  currentImage.value = currentImage.value < imagesArr.length - 1 ? currentImage.value + 1 : 0
}

const imageTopFun = () => {
  currentImage.value = currentImage.value > 0 ? currentImage.value - 1 : imagesArr.length - 1 
}

onBeforeMount(() => {
  clearInterval(Number(timer))
  timer = null
})
</script>

<template>
<div class="font-sans antialiased bg-gray-50">
    <!-- <div class="relative z-40 relative px-6 text-white"> -->
        <!-- <div class=" py-4 container mx-auto flex items-center justify-between relative z-10">
        </div> w-full h-screen-->
    <!-- </div> -->
    <div class="w-full h-screen relative -mt-32 px-12 flex items-center justify-center bg-green-900">
        <div class="h-full w-full absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-30"></div>
        <div class="relative z-10 text-center px-12">
            <h1 class="md:max-w-lg lg:max-w-lg xl:max-w-2xl mx-auto text-3xl lg:text-4xl xl:text-5xl font-black leading-relaxed lg:leading-relaxed xl:leading-normal text-white font-display">Lorem ipsum dolor sit</h1>
            <div class="max-w-xs md:max-w-sm lg:max-w-md mx-auto mt-8 text-white text-sm lg:text-base lg:leading-loose tracking-wide">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        <img :src="imagesArr[currentImage]" class="absolute top-0 left-0 w-full h-full object-cover opacity-90">
        <div class="absolute top-1/2 left-0 w-full flex items-center justify-between px-6 md:px-12">
            <button @click="imageTopFun()" class="hover:opacity-50">
                <svg class="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
                </svg>
            </button>
            <button @click="imagebackFun()" class="hover:opacity-50">
                <svg class="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
            </button>
        </div>
    </div>

    <!-- 兴趣总览 -->
    <div class="relative p-12 md:p-24 md:pt-12">
        <h3 class="text-xs uppercase tracking-widest text-center mb-2 text-gray-800">Featured Links</h3>
        <h2 class="text-2xl uppercase tracking-widest text-center lg:text-4xl font-heading mb-20 text-gray-900">标签总览</h2>
        <div class="lg:grid grid-cols-4 grid-rows-3 gap-5 font-display text-3xl text-white">
            <div class="bg-black col-span-1 row-span-1 relative flex items-center justify-center py-24">
                <span class="relative z-10">无人机、拍照</span>
                <img src="https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" class="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-25">
            </div>
            <div class="bg-black col-span-1 row-span-1 relative flex items-center justify-center py-24">
                <span class="relative z-10">衣服控</span>
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" class="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-25">
            </div>
            <div class="bg-black col-span-2 row-span-2 relative flex items-center justify-center py-24">
                <span class="relative z-10">95年老仙女单身冠军</span>
                <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" class="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-25">
            </div>
            <div class="bg-black col-span-2 row-span-2 relative flex items-center justify-center py-24">
                <span class="relative z-10">技术宅女</span>
                <img src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" class="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-25">
            </div>
            <div class="bg-black col-span-1 row-span-1 relative flex items-center justify-center py-24">
                <span class="relative z-10">夜跑达人</span>
                <img src="https://images.unsplash.com/photo-1485727749690-d091e8284ef3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" class="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-25">
            </div>
            <div class="bg-black col-span-1 row-span-1 relative flex items-center justify-center py-24">
                <span class="relative z-10">宇宙第一美</span>
                <img src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" class="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-25">
            </div>
        </div>
    </div>

    <div class="container mx-auto px-6 py-12">
        <h2 class="font-display font-semibold text-3xl">Testimonials</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 mt-12">
            <div class="relative">
                <p class="relative z-10 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div class="relative z-10 text-sm flex items-center justify-end">
                    <svg class="inline-block w-32 h-32 -mb-8" x="0px" y="0px" viewBox="0 0 100 125">
                        <path d="M91.8 45c-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7C70 47.3 68 45 64 45c-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7c-1.8-2-3.8-4.3-7.7-4.3-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7c-1.8-2-3.8-4.3-7.7-4.3-.6 0-1 .4-1 1s.4 1 1 1c3 0 4.5 1.7 6.2 3.7 1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7s4.5 1.7 6.2 3.7c1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7s4.5 1.7 6.2 3.7c1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7.6 0 1-.4 1-1s-.4-1-1-1z"/>
                    </svg>
                    <span>Elle Spearman</span>
                </div>
                <svg class="absolute top-0 left-0 w-28 h-28 -mt-10 -ml-8 opacity-5" viewBox="0 0 95.333 95.332">
                    <path d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793
                                            c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045
                                            s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076
                                            c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002
                                            c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z"/>
                    <path d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019
                                            c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23
                                            c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16
                                            c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312
                                            c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z"/>
                </svg>
            </div>
            <div class="relative">
                <p class="relative z-10 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div class="relative z-10 text-sm flex items-center justify-end">
                    <svg class="inline-block w-32 h-32 -mb-8" x="0px" y="0px" viewBox="0 0 100 125">
                        <path d="M91.8 45c-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7C70 47.3 68 45 64 45c-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7c-1.8-2-3.8-4.3-7.7-4.3-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7c-1.8-2-3.8-4.3-7.7-4.3-.6 0-1 .4-1 1s.4 1 1 1c3 0 4.5 1.7 6.2 3.7 1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7s4.5 1.7 6.2 3.7c1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7s4.5 1.7 6.2 3.7c1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7.6 0 1-.4 1-1s-.4-1-1-1z"/>
                    </svg>
                    <span>Elle Spearman</span>
                </div>
                <svg class="absolute top-0 left-0 w-28 h-28 -mt-10 -ml-8 opacity-5" viewBox="0 0 95.333 95.332">
                    <path d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793
                                            c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045
                                            s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076
                                            c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002
                                            c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z"/>
                    <path d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019
                                            c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23
                                            c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16
                                            c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312
                                            c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z"/>
                </svg>
            </div>
            <div class="relative">
                <p class="relative z-10 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div class="relative z-10 text-sm flex items-center justify-end">
                    <svg class="inline-block w-32 h-32 -mb-8" x="0px" y="0px" viewBox="0 0 100 125">
                        <path d="M91.8 45c-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7C70 47.3 68 45 64 45c-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7c-1.8-2-3.8-4.3-7.7-4.3-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7c-1.8-2-3.8-4.3-7.7-4.3-.6 0-1 .4-1 1s.4 1 1 1c3 0 4.5 1.7 6.2 3.7 1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7s4.5 1.7 6.2 3.7c1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7s4.5 1.7 6.2 3.7c1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7.6 0 1-.4 1-1s-.4-1-1-1z"/>
                    </svg>
                    <span>Elle Spearman</span>
                </div>
                <svg class="absolute top-0 left-0 w-28 h-28 -mt-10 -ml-8 opacity-5" viewBox="0 0 95.333 95.332">
                    <path d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793
                                            c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045
                                            s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076
                                            c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002
                                            c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z"/>
                    <path d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019
                                            c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23
                                            c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16
                                            c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312
                                            c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z"/>
                </svg>
            </div>
        </div>
    </div>


    <div class="p-12 md:p-24">
        <div class="bg-gray-100 p-12 md:py-24 lg:flex">
            <div class="mx-auto max-w-4xl flex flex-wrap">
                <img src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" class="w-full lg:w-4/12 h-full object-cover">
                <div class="flex-1 flex items-center justify-center pt-12 lg:pt-0">
                    <div class="text-center">
                        <h3 class="text-4xl font-display mb-8 text-gray-700">夜跑</h3>
                        <div class="text-sm lg:text-lg max-w-md mx-auto text-gray-500 leading-relaxed">
                          <p> 自律给我自由 </p>  
                          <p> 不开心的时候，流泪不如流汗 </p>
                          <p> 我离美人鱼的距离，只差一个人鱼线 </p>
                          <p> 热爱生活有很多的方式，但最直接是跑一场马拉松 </p>
                          <p> 健身前28健身后18</p>
                          <p> 赘肉不可怕，谁露谁尴尬 </p>
                          <p> 运动，就是和自己较量，放弃你就输了 </p>
                          <p> 如果我能一口气吸出奶茶里的所有珍珠 </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="w-full py-32 px-24 flex flex-wrap justify-around relative"> 
        <img src="@/assets/images/8-2.jpg" class="w-64 h-64 object-cover mb-12 md:mb-0" />
        <img src="@/assets/images/7-2.jpg" class="w-64 h-64 object-cover mb-12 md:mb-0" />
        <img src="@/assets/images/8-1.jpg" class="w-64 h-64 object-cover mb-12 md:mb-0" />
        <img src="@/assets/images/7.jpg" class="w-64 h-64 object-cover" />
        <h3 class="text-6xl text-gray-800 font-bold tracking-tighter absolute top-0 left-0 mt-12 ml-20">拍</h3>
        <h3 class="text-6xl text-gray-800 font-bold tracking-tighter absolute bottom-0 right-0 mb-16 mr-20">照</h3>
    </div>

    <div class="p-12 md:p-24">
        <div class="bg-gray-100 p-12 md:py-24 lg:flex">
            <div class="mx-auto max-w-4xl flex flex-wrap">
                <div class="flex-1 flex items-center justify-center pt-12 lg:pt-0">
                    <div class="text-center">
                        <h3 class="text-4xl font-display mb-8 text-gray-700">夜跑</h3>
                        <div class="text-sm lg:text-lg max-w-md mx-auto text-gray-500 leading-relaxed">
                          <p> 自律给我自由 </p>  
                          <p> 不开心的时候，流泪不如流汗 </p>
                          <p> 我离美人鱼的距离，只差一个人鱼线 </p>
                          <p> 热爱生活有很多的方式，但最直接是跑一场马拉松 </p>
                          <p> 健身前28健身后18</p>
                          <p> 赘肉不可怕，谁露谁尴尬 </p>
                          <p> 运动，就是和自己较量，放弃你就输了 </p>
                          <p> 如果我能一口气吸出奶茶里的所有珍珠 </p>
                        </div>
                    </div>
                </div>
                <img src="@/assets/images/7-1.jpg" class="w-full lg:w-4/12 h-full object-cover">
            </div>
        </div>
    </div>

</div>
</template>
