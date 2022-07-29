<script lang="ts" setup>
import { InitApp } from '~/utils/initApp'
InitApp()
const locale = useState<string>('locale.i18n')
</script>

<template>
  <Html :lang="locale">
    <Body
      class="bg-white text-gray-800 antialiased transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200"
    >
      <NuxtLayout>
        <nav class="w-full px-6 bg-white shadow-lg relative z-20">
          <div class="container mx-auto max-w-4xl h-16 flex justify-between text-xs md:text-sm">
            <div class="h-full flex items-center">
              <NuxtLink to="home" class="text-gray-600 no-underline mr-4">关于我</NuxtLink>
              <NuxtLink to="portfolio" class="text-gray-600 no-underline mr-4">作品集</NuxtLink>
              <NuxtLink to="life" class="text-gray-600 no-underline mr-4">生活</NuxtLink>
            </div>
            <div class="pt-4">
              <a href="#" class="block w-16 h-16 md:w-24 md:h-24 rounded-full border-2 overflow-hidden">
                <img src="@/assets/images/fuzuxian.jpg" class="w-full h-full object-cover" />
              </a>
            </div>
            <div class="h-full flex items-center">
              <TemLanguageChange class="mr-4" />
              <TemColorChange />
            </div>
          </div>
        </nav>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<style lang="postcss">
body {
  @apply bg-gray-50 dark:bg-gray-800;
}
.global-text {
  @apply text-gray-900 dark:text-gray-50;
}
</style>
