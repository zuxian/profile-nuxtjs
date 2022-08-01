# zuxian的个人简介


### 项目预览
![image](https://user-images.githubusercontent.com/38668796/179501879-b1efa419-8419-4c27-a79e-d185cb2884b7.png)


[![1111111](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/productdevbook/nuxt3-app)

### 项目用的技术栈

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/productdevbook/nuxt3-app)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/productdevbook/nuxt3-app)

This starter template also includes:

- We recommend to look at the [nuxtjs-documentation](https://v3.nuxtjs.org).

- [Tailwind CSS v3](https://github.com/tailwindlabs/tailwindcss)
- [Eslint](https://eslint.org)
- [Headless UI](https://headlessui.dev/vue/menu) - unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS
   https://headlessui.com/

   
- [Icones](https://github.com/antfu/icones) - beautiful hand-crafted SVG icons with [Unocss](https://github.com/unocss/unocss) used. 

First-party plugins needed for Tailwind UI:

- [tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)
- [tailwindcss/line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)
- [tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)


Best Nuxt with Plugins:
- [Pinia](https://github.com/posva/pinia)



###  项目运行

- 安装依赖

```bash
yarn install
```

- 开发环境

http://localhost:3000

```bash
yarn dev
```

- 生产环境

```bash
# 构建
yarn build

# 运行
yarn start
```

- 依赖更新

```bash
# 按空格键+enter键
yarn allupdate

# 实际执行 yarn upgrade-interactive --latest
```


## 项目详细介绍

### Nuxt3 新特性

>更轻量：以现代浏览器为基础的情况下，服务器部署和客户端产物最多减小75倍。
更快：用动态服务端代码来优化冷启动。
Hybird：增量动态生成和其他高级模式现在都成为可能。
Suspense: 导航前后可在任何组件中获取数据。
Composition API : 使用Composition API 和 Nuxt3的composables 实现真正的可复用性。
Nuxt CLI ： 权限的零依赖体验，助你轻松搭建项目和集成模块。
Nuxt Devtools ：专属调试工具，更多的信息和快速修复，在浏览器中高效工作。
Nuxt Kit ：全新的基于 TypeScript 和跨版本兼容的模块开发。
Webpack5 ： 更快的构建速度和更小的构建包，并且零配置。
Vite：用Vite作为你的打包器，体验轻量级的快速HMR。
Vue3 ： 完全支持Vue3语法，这一点特别关键。
TypeScript：由原生TypeScript和ESM构成，没有额外配置步骤。


- 组件库：headlessui


https://headlessui.com/



-  一键换肤

配置文件nuxt.config.ts引进了模块 `@nuxtjs/color-mode`

参考文档：[color-mode.nuxtjs.org](https://color-mode.nuxtjs.org/) 



- 国际化语言

vue-i18n


-  图标库

unocss icons 使用图标预设

https://juejin.cn/post/7028892490803445767

https://github.com/unocss/unocss/tree/main/packages/nuxt

配置文件nuxt.config.ts


```js
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
```

图标库查找： https://iconify.design/

unocss/preset-icons ---> 组件名字使用 unoicon

```js
<UnoIcon class="i-ph-github-logo-duotone" />

// 或者
<div class="i-carbon-3d-cursor"  text-3xl text-white />
<button text-white text-3xl class="i-carbon-sun" />
```


##  部署

Git 全局设置:

git config --global user.name "zuxian"
git config --global user.email "zuxian_fu@163.com"
创建 git 仓库:

mkdir profile-nuxtjs
cd profile-nuxtjs
git init 
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://gitee.com/zuxian/profile-nuxtjs.git
git push -u origin "master"
已有仓库?

cd existing_git_repo
git remote add origin https://gitee.com/zuxian/profile-nuxtjs.git
git push -u origin "master"


## 与我联系


fuzuxian

