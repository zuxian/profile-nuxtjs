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
  <div class="bg-gray-200 font-sans font-thin px-6 bg-fixed bg-cover bg-no-repeat pt-10">
    <div class="mx-auto max-w-6xl bg-white py-10 px-12 lg:px-24 shadow-xl">
      <div class="mb-6">
        <h3 class="text-xl lg:text-2xl text-center mb-3 tracking-wider">
          付祖贤
        </h3>

        <p class="tracking-wide text-sm mb-3 leading-relaxed mx-auto max-w-xl text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br class="hidden md:block">Aenean commodo ligula eget dolor.
        </p>

        <p class="tracking-wide text-xs text-gray-600 leading-loose mx-auto max-w-xl text-center">
          Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum.
        </p>
      </div>

      <div class="flex flex-wrap -mx-2">
        <div class="w-1/3 p-2">
          <NuxtLink to="home">
            <div class="block mb-8 bg-black hover:bg-gray-700">
              <img src="https://images.unsplash.com/photo-1499175898579-d743fea6e7dc?w=800" class="w-full h-80 opacity-75">
            </div>
            <div class="block text-xl text-center">关于我</div>
          </NuxtLink>
        </div>

        <div class="w-1/3 p-2">
          <NuxtLink to="portfolio">
            <div class="block mb-8 bg-black hover:bg-gray-700">
              <img src="https://images.unsplash.com/photo-1477064996809-dae46985eee7?w=800" class="w-full h-80 opacity-75">
            </div>
            <div class="block text-xl text-center">作品集</div>
          </NuxtLink>
        </div>

        <div class="w-1/3 p-2">
          <NuxtLink to="life">
            <div class="block mb-8 bg-black hover:bg-gray-700">
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800" class="w-full h-80 opacity-75">
            </div>
            <div class="block text-xl text-center">生活</div>
          </NuxtLink>
        </div>

      </div>
    </div>
  </div>
</template>
