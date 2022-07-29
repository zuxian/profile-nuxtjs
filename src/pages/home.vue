<script setup lang="ts">
import { reactive, ref } from 'vue'

let timer: NodeJS.Timer | null = null
let mobileMenu = ref(false)
let currentImage = ref(0)
const images = reactive([
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80',
  'https://images.unsplash.com/photo-1527030280862-64139fba04ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80',
])

onMounted(() => {
  timer = setInterval(() => {
    console.log('----setInterval----')
    currentImage.value = currentImage.value < images.length - 1 ? currentImage.value + 1 : 0
  }, 3000)
})

onBeforeMount(() => {
  clearInterval(Number(timer))
  timer = null
})
</script>

<template>
  <div>
    <div class="font-sans font-normal antialiased bg-white text-gray-900">
   
		<div class="w-full h-screen relative p-16">
			<div class="relative z-20 flex flex-wrap h-full -mt-20 pt-32">	
				<div class="w-full md:w-1/2 h-full">
					<img src="https://images.unsplash.com/photo-1514315384763-ba401779410f?w=1400" class="w-full h-full object-cover" />
				</div>
				<div class="w-full md:w-1/2 p-10 flex justify-center items-center">				
					<div class="max-w-xs">
						<h1 class="text-6xl mb-4 leading-none">Welcome</h1>
						<p class="mb-8 text-sm leading-relaxed">
							Ad fugiat in dolore velit fugiat mollit dolore eu sunt tempor anim reprehenderit. Ad fugiat in dolore velit fugiat mollit dolore eu sunt tempor anim reprehenderit.
						</p>
						<a href="#" class="bg-gray-900 text-white uppercase font-sans text-xs px-4 py-3">Learn more <i class="ml-1 fa fa-chevron-right"></i></a>
					</div>
				</div>
			</div>
			<div class="z-10 w-1/2 h-full bg-gray-900 absolute top-0 left-0 -ml-20"></div>
			<div class="z-10 w-1 h-64 bg-gray-100 absolute bottom-0 left-0 ml-5"></div>		
		</div>	

      <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 py-24">
        <div class="lg:px-32 lg:py-32 flex items-center justify-center">
          <div>
            <h2 class="text-5xl mb-6 font-bold uppercase italic">
              Contractors you can trust
            </h2>
            <p class="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="/about" class="mt-8 inline-block rounded-full border-2 border-gray-900 text-lg px-8 py-3 hover:bg-black hover:text-white">Our Promise</a>
          </div>
        </div>
        <div class="hidden lg:grid relative grid-cols-2">
          <div class="pt-24">
            <div class="relative w-full h-full">
              <img src="https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80" class="absolute inset-0 w-full h-full object-cover -mt-6 z-10">
            </div>
          </div>
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" class="absolute inset-0 w-full h-full object-cover -ml-12">
          </div>
        </div>
      </div>
      <div class="mx-auto max-w-lg text-center py-24">
        <h2 class="text-5xl mb-6 font-bold uppercase italic">
          Our Services
        </h2>
        <p class="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="flex flex-wrap md:space-x-12 justify-center px-4">
        <a href="/service" class="block w-full md:flex-1 max-w-xs mb-12">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" class="w-full h-96 object-cover">
          <div class="text-lg text-center p-4">Service Title</div>
        </a>
        <a href="/service" class="block w-full md:flex-1 max-w-xs mb-12">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" class="w-full h-96 object-cover">
          <div class="text-lg text-center p-4">Service Title</div>
        </a>
        <a href="/service" class="block w-full md:flex-1 max-w-xs mb-12">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" class="w-full h-96 object-cover">
          <div class="text-lg text-center p-4">Service Title</div>
        </a>
      </div>
      <div class="relative w-full bg-black py-32 my-12 lg:my-24">
        <div class="relative z-10 text-center text-white text-center mx-auto max-w-xl">
          <h1 class="text-3xl lg:text-7xl mb-4 font-bold uppercase italic">
            Property Development
          </h1>
          <a href="#" class="inline-block rounded-full border-2 border-white text-lg px-8 py-3 hover:bg-white hover:text-gray-900">Find out more</a>
        </div>
        <img src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2547&q=80" class="w-full h-full absolute inset-0 object-cover opacity-75">
      </div>
      <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 py-24">
        <div class="hidden lg:grid relative grid-cols-2">
          <div class="pt-24">
            <div class="relative w-full h-full">
              <img src="https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80" class="absolute inset-0 w-full h-full object-cover -mt-6 z-10">
            </div>
          </div>
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" class="absolute inset-0 w-full h-full object-cover -ml-12">
          </div>
        </div>
        <div class="lg:px-32 lg:py-32 flex items-center justify-center">
          <div>
            <h2 class="text-5xl mb-6 font-bold uppercase italic">
              Contractors you can trust
            </h2>
            <p class="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="/about" class="mt-8 inline-block rounded-full border-2 border-gray-900 text-lg px-8 py-3 hover:bg-black hover:text-white">Our Promise</a>
          </div>
        </div>
      </div>
      <div class="bg-black text-white text-center p-12">
        <div class="text-2xl">
          Join the club
        </div>
        <form class="max-w-sm mx-auto relative h-12 mt-6 border-b border-white" name="subscribe" method="POST" netlify>
          <input type="text" name="email" class="w-full h-full bg-transparent border-none pr-12" placeholder="Enter your email">
          <button class="w-12 h-12 flex items-center justify-center absolute top-0 right-0">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
        </form>
      </div>
      <div>
        <div class="flex items-center justify-center my-12">
          <a href="#" class="mx-4">
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a href="#" class="mx-4">
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a href="#" class="mx-4">
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
            </svg>
          </a>
          <a href="#" class="mx-4">
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
            </svg>
          </a>
        </div>
      </div>
      <div class="container mx-auto text-center py-12 mt-12 border-t border-gray-200 text-xs uppercase">
        <div>Copyright &copy; 2021 foundation</div>
        <div class="text-gray-400 mt-2">
          Images by Unsplash
        </div>
      </div>
    </div>
  </div>
</template>
