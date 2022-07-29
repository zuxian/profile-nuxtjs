<script setup lang="ts">
import { reactive, ref } from 'vue'

let timer: NodeJS.Timer | null = null
let showContactInfo = ref(false)
let showMobileMenu = ref(false)
const currentImage = ref(0)
const imageArr = reactive([
{
    "image": "../assets/images/7-1.jpg",
    "url": "/product"
}, {
    "image": "../assets/images/8-2.jpg",
    "url": "/product"
}, {
    "image": "../assets/images/7.jpg",
    "url": "/product"
}, {
    "image": "../assets/images/8-3.jpg",
    "url": "/product"
}, {
    "image": "../assets/images/8.jpg",
    "url": "/product"
}
  ])

onMounted(() => {
  timer = setInterval(() => {
    console.log('----setInterval----')
    imageBackFun()
  }, 3000)
})

const imageBackFun = () => {
  currentImage.value = currentImage.value < imageArr.length - 1 ? currentImage.value + 1 : 0
}

const imageTopFun = () => {
  currentImage.value = currentImage.value > 0 ? currentImage.value - 1 : imageArr.length - 1 
}

onBeforeMount(() => {
  clearInterval(Number(timer))
  timer = null
})
</script>

<template>
  <div class="font-sans text-gray-700 antialiased bg-white">
    <!-- 本页面介绍 -->
    <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12">
      <div class="lg:col-span-5 py-12 md:px-12 md:py-32 flex items-center justify-center">
        <div class="max-w-sm">
          <h1 class="text-5xl md:text-6xl mb-6 font-display text-black leading-tight">
            Our new arrivals
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="/products" class="flex items-center mt-8 uppercase text-sm text-black font-semibold">
            Shop now
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <div class="lg:col-span-7 relative h-52 md:h-72 lg:h-auto">
        <a :href="imageArr[currentImage].url" href="/product">
          <img :src="imageArr[currentImage].image" class="absolute inset-0 w-full h-full object-cover">
        </a>
        <div class="absolute bottom-0 right-0 grid grid-cols-2">
          <button class="p-4 md:p-6 bg-white hover:bg-gray-100 hover:opacity-80" @click="imageTopFun">
            <svg class="w-6 h-6 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button class="p-4 md:p-6 bg-white hover:bg-gray-100 hover:opacity-80" @click="imageBackFun">
            <svg class="w-6 h-6 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>


    <!-- 工作项目 -->
    <h2 class="text-center uppercase font-display text-lg md:text-xl text-black py-12 md:py-24 px-6">
      项目经历
    </h2>

    <!-- 工作项目-1  -->
    <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 lg:mb-24">
      <div class="relative h-52 md:h-72 lg:h-auto">
        <a href="/category">
          <img src="@/assets/images/7-1.jpg" class="absolute inset-0 w-full h-full object-cover">
        </a>
      </div>
      <div class="px-6 py-12 md:p-16 lg:p-32 flex items-center justify-center order-last">
        <div>
          <h3 class="text-4xl mb-6 font-display text-black leading-tight">
            Bags + Clutches
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="/category" class="flex items-center mt-8 uppercase text-sm text-black font-semibold">
            Shop now
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- 工作项目-2  -->
    <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 lg:mb-24">
      <div class="relative h-52 md:h-72 lg:h-auto">
        <a href="/category">
          <img src="@/assets/images/7-2.jpg" class="absolute inset-0 w-full h-full object-cover">
        </a>
      </div>
      <div class="px-6 py-12 md:p-16 lg:p-32 flex items-center justify-center order-last lg:order-first">
        <div>
          <h3 class="text-4xl mb-6 font-display text-black leading-tight">
            Clothing
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="/category" class="flex items-center mt-8 uppercase text-sm text-black font-semibold">
            Shop now
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- 工作项目-3  -->
    <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 lg:mb-24">
      <div class="relative h-52 md:h-72 lg:h-auto">
        <a href="/category">
          <img src="@/assets/images/7-1.jpg" class="absolute inset-0 w-full h-full object-cover">
        </a>
      </div>
      <div class="px-6 py-12 md:p-16 lg:p-32 flex items-center justify-center order-last">
        <div>
          <h3 class="text-4xl mb-6 font-display text-black leading-tight">
            Jewellery
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="/category" class="flex items-center mt-8 uppercase text-sm text-black font-semibold">
            Shop now
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>


    <!-- github--react四部曲 -->
    <div class="relative z-20 flex justify-center items-center flex-wrap h-screen overflow-hidden">

			<div class="relative z-20 w-full flex flex-wrap justify-around max-w-4xl">
				
				<div class="w-full md:w-64">
					<div class="relative mb-10">
						<img src="https://images.unsplash.com/photo-1499914485622-a88fac536970?w=640" class="w-64 h-64 object-cover" />

						<div class="absolute bottom-0 left-0 w-full flex justify-center items-start">
							<div class="w-1 h-16 bg-gray-900 -mb-6"></div>
						</div>
					</div>

					<h3 class="text-xs uppercase tracking-tighter text-center font-sans">Pinterest Management</h3>
				</div>
				
				<div class="w-full md:w-64 md:mt-16">
					<div class="relative mb-10">
						<img src="https://images.unsplash.com/photo-1462078563783-650e23af549d?w=640" class="w-64 h-64 object-cover" />

						<div class="absolute bottom-0 left-0 w-full flex justify-center items-start">
							<div class="w-1 h-16 bg-gray-900 -mb-6"></div>
						</div>
					</div>

					<h3 class="text-xs uppercase tracking-tighter text-center font-sans">Instagram Strategy</h3>
				</div>
				
				<div class="w-full md:w-64 md:mt-32">
					<div class="relative mb-10">
						<img src="https://images.unsplash.com/photo-1553531580-652231dae097?w=640" class="w-64 h-64 object-cover" />

						<div class="absolute bottom-0 left-0 w-full flex justify-center items-start">
							<div class="w-1 h-16 bg-gray-900 -mb-6"></div>
						</div>
					</div>

					<h3 class="text-xs uppercase tracking-tighter text-center font-sans">Brand Design</h3>
				</div>

			</div>

			<div class="z-10 w-1/2 h-full bg-gray-400 absolute top-0 right-0 -mr-20"></div>

			<div class="z-10 w-1 h-64 bg-gray-100 absolute bottom-0 right-0 mr-5"></div>

		</div>


    <!-- 小项目 -->
    <h2 class="text-center uppercase font-display text-lg lg:text-xl text-black py-12 md:py-24 px-6">
      Latest Products
    </h2>
      <div class="grid grid-cols-3 gap-12 px-12 pt-32 pb-32">
        <a href="#" class="block relative h-72 flex items-end justify-end pr-12 pb-12 text-right hover:opacity-75">
            <div class="relative z-10">
                <h3 class="font-display text-3xl font-semibold text-gray-800 mb-6">Our Favourites</h3>
                <span class="border-b border-gray-700 text-gray-700 pb-1">Shop now</span>
            </div>
            <img src="https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1935&q=80" class="absolute inset-0 w-full h-full object-cover object-right">
        </a>
        <a href="#" class="block relative h-72 flex items-end justify-end pr-12 pb-12 text-right hover:opacity-75">
            <div class="relative z-10">
                <h3 class="font-display text-3xl font-semibold text-gray-800 mb-6">The Collection</h3>
                <span class="border-b border-gray-700 text-gray-700 pb-1">Shop now</span>
            </div>
            <img src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1951&q=80" class="absolute inset-0 w-full h-full object-cover object-right">
        </a>
        <a href="#" class="block relative h-72 flex items-end justify-end pr-12 pb-12 text-right hover:opacity-75">
            <div class="relative z-10">
                <h3 class="font-display text-3xl font-semibold text-gray-800 mb-6">Signature Style</h3>
                <span class="border-b border-gray-700 text-gray-700 pb-1">Shop now</span>
            </div>
            <img src="https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80" class="absolute inset-0 w-full h-full object-cover object-right">
        </a>
      </div>
  </div>
</template>
