import{s as o,ag as n,o as r,h as i,i as e,ad as a,ah as d,ai as l}from"./entry-c31cf1b8.mjs";const c=t=>(d("data-v-6f4d7418"),t=t(),l(),t),p={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},_=c(()=>e("div",{class:"fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight"},null,-1)),u={class:"max-w-520px text-center"},x=["textContent"],h=["textContent"],g={__name:"error-500",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:String,default:"500"},statusMessage:{type:String,default:"Server error"},description:{type:String,default:"This page is temporarily unavailable."}},setup(t){const s=t;return n({title:`${s.statusCode} - ${s.statusMessage} | ${s.appName}`,script:[],style:[{children:""}]}),(m,f)=>(r(),i("div",p,[_,e("div",u,[e("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:a(t.statusCode)},null,8,x),e("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:a(t.description)},null,8,h)])]))}};var y=o(g,[["__scopeId","data-v-6f4d7418"]]);export{y as default};