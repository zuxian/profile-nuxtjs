import { defineNuxtConfig } from 'nuxt'
import presetIcons from '@unocss/preset-icons'

export default defineNuxtConfig({
  srcDir: 'src',
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    // pinia plugin - https://pinia.esm.dev
    '@pinia/nuxt',
    // unocss plugin - https://github.com/unocss/unocss
    '@unocss/nuxt',
    '@intlify/nuxt3',
    // 一键换肤 https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
  ],

  app: {
    // buildAssetsDir: 'static',  // 静态文件、打包的js、css文件存放路径
    baseURL: '/profile-nuxtjs/',   // 生成的index.html 引用静态文件增加路径前缀
  },
  // rootDir: 'docs',
  // outputDir: 'docs',

  // buildDir: 'docs',
  // buildDir: 'profile-nuxtjs',
  // router: {
  //   // mode: 'hash',
  //   base: '/profile-nuxtjs'
  // },
  // generate: {
    
  //   // buildDir: 'profile-nuxtjs',
  //   dir: 'docs', // gh_pages/ instead of dist/
  //   // subFolders: true // 运行nuxt generate将为每个路由创建一个目录并生成index.html文件
  // },
  // env: {
  //   // baseUrl: process.env.BASE_URL || '/profile-nuxtjs',
  //   BASE_URL: process.env.BASE_URL,
  //   NODE_ENV: process.env.NODE_ENV
  // },

  build: {
    
    // publicPath: 'https://zuxian.github.io/profile-nuxtjs',
    transpile: ['@headlessui/vue'],
  },
  unocss: {
    uno: false,
    preflight: false,
    icons: true,
    presets: [
      presetIcons({
        scale: 1.2,
        extraProperties: {
          display: 'inline-block',
        },
      }),
    ],
    safelist: ['i-twemoji-flag-us-outlying-islands', 'i-twemoji-flag-turkey'],
  },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en-US',
      fallbackLocale: 'en-US',
      availableLocales: ['en-US', 'tr-TR'],
      sync: true,
    },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ['@pinia/nuxt', '@intlify/nuxt3', './type.d.ts'],
      },
    },
  },
  colorMode: {
    classSuffix: '',
    fallback: 'light',
    storageKey: 'color-mode',
  },
  vite: {
    logLevel: 'info',
  },
})
