<script setup lang="ts">
import { ILink } from '~/types'
const { t } = useLang()

const lists = computed<ILink[]>(() => [
  { id: 1, title: 'Pinia Store', url: 'pinia', icon: 'i-carbon-store' },
  { id: 1, title: t('modal'), url: 'modal', icon: 'i-carbon-collapse-all' },
  { id: 1, title: 'Menu', url: 'menu', icon: 'i-carbon-menu' },
  { id: 1, title: 'Home', url: 'home', icon: 'i-carbon-menu' },
  { id: 1, title: 'New soon...', url: '', icon: 'i-carbon-milestone' },
])
</script>

<template>
	<div class="bg-gray-200 font-sans font-thin px-6 bg-fixed bg-cover bg-no-repeat" style="background-image: url('https://images.unsplash.com/photo-1523742238290-adf3b54101bf?w=1800')">

		<!-- <header class="mx-auto max-w-xl py-20 text-center">
			<a href="#" class="block text-2xl mb-12">Company Name</a>

			<ul class="flex justify-center uppercase text-xs">
				<li>
					<a href="#" class="mx-4 hover:text-gray-600">Home</a>
				</li>
				<li>
					<a href="#" class="mx-4 text-gray-600">About</a>
				</li>
				<li>
					<a href="#" class="mx-4 hover:text-gray-600">Blog</a>
				</li>
				<li>
					<a href="#" class="mx-4 hover:text-gray-600">Contact</a>
				</li>
			</ul>
		</header> -->

    <div class="mb-10 flex items-center justify-between">
      <a target="_blank" href="https://github.com/zuxian">zuxian</a>
      <div class="flex space-x-2">
        <TemLanguageChange />
        <TemColorChange />
      </div>
    </div>

		<div class="mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">

			<div class="mb-12">
				<h1 class="text-3xl lg:text-4xl text-center mb-6 tracking-wider">About Us</h1>

				<p class="tracking-wide text-sm mb-6 leading-relaxed mx-auto max-w-xl text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br class="hidden md:block" />Aenean commodo ligula eget dolor.</p>

				<p class="tracking-wide text-xs text-gray-600 leading-loose mx-auto max-w-xl text-center">Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum.</p>
			</div>


			<div class="flex flex-wrap -mx-2">
				
				<div class="w-1/3 p-2">
					<a href="#" class="block mb-8 bg-black hover:bg-gray-700">
						<img src="https://images.unsplash.com/photo-1499175898579-d743fea6e7dc?w=800" class="w-full h-auto opacity-75" />
					</a>
					<a href="#" class="block text-xl text-center">Fashion &amp; Beauty</a>
				</div>
				
				<div class="w-1/3 p-2">
					<a href="#" class="block mb-8 bg-black hover:bg-gray-700">
						<img src="https://images.unsplash.com/photo-1477064996809-dae46985eee7?w=800" class="w-full h-auto opacity-75" />
					</a>
					<a href="#" class="block text-xl text-center">Lifestyle</a>
				</div>
				
				<div class="w-1/3 p-2">
					<a href="#" class="block mb-8 bg-black hover:bg-gray-700">
						<img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800" class="w-full h-auto opacity-75" />
					</a>
					<a href="#" class="block text-xl text-center">Travel</a>
				</div>

			</div>


		</div>

		<div class="-mx-6 bg-white px-6 py-12">
			
			<div class="mx-auto container text-gray-800 text-sm flex justify-between">
				<span>Powered by <a href="https://digizu.co.uk" class="text-black">Digizu</a></span>
				<span>&copy; copyright 2019</span>
			</div>

		</div>
		

	</div>



  <!-- <div class="mx-auto mt-4 max-w-sm">
    <div class="mb-10 flex items-center justify-between">
      <a target="_blank" href="https://productdevbook.com">productdevbook.com</a>
      <div class="flex space-x-2">
        <TemLanguageChange />
        <TemColorChange />
      </div>
    </div>
    <div class="flex flex-col">
      <h1>{{ t("follow") }}</h1>
      <div class="flex w-full items-center justify-between py-2">
        <img
          class="h-20 w-20 rounded-full"
          height="160"
          width="160"
          src="https://avatars.githubusercontent.com/u/38668796?v=4"
          alt="productdevbook"
        >

        <div
          class="place-items-centerr grid grid-cols-3 justify-items-center gap-4 [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:rounded-md [&>*]:bg-gray-100 [&>*]:p-3 dark:[&>*]:bg-gray-600"
        >
          <a
            target="blank"
            class="font-bold text-gray-900 hover:bg-gray-300 dark:text-white dark:hover:bg-gray-400"
            href="https://github.com/productdevbook"
          >
            <UnoIcon class="i-ph-github-logo-duotone" />
          </a>

          <a
            class="hover:bg-gray-300 dark:hover:bg-gray-400"
            href="https://twitter.com/productdevbook"
            target="_blank"
          >
            <UnoIcon class="i-ph-twitter-logo-duotone" />
          </a>

          <a
            target="blank"
            class="font-bold text-gray-900 hover:bg-gray-300 dark:text-white dark:hover:bg-gray-400"
            href="https://discord.gg/UN8mqgC79S"
          >
            <UnoIcon class="i-ph-discord-logo-duotone" />
          </a>
        </div>
      </div>
    </div>

    <ul role="list" class="mt-10 space-y-4">
      <li v-for="item in lists" :key="item.id">
        <List
          :link="{
            id: item.id,
            title: item.title,
            url: item.url,
            icon: item.icon,
          }"
        />
      </li>
    </ul>
  </div> -->
</template>
