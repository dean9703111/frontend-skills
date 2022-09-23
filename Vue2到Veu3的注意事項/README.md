# Vue2 到 Veu3 的注意事項

1. vue2 更新到 vue3 有哪些差別？
   1. 第一個是都改到 setup 裡面去撰寫
   2. 從  Options Syntax 到 Composite-api，過去在 Vue2 中如果用 this 會直接指向 vue instance 而非 method，不完全依照 Javascript 的 function scope 邏輯
   3. 前端因為主要由「事件驅動」，所以從 Class component 遷移到 Functional component，在開發上會更為直覺。
   4. 生命週期有做對應的調整，除了 Setup 取代 beforecreate、created，其他差異不大
   5. 使用 proxy 代替 defineProperty，達成更深層次的渲染
   6. 對 typescript 的支援，在大型開發環境中，如果有 type 的定義會更好維護及閱讀
   7. 可以讓生命週期的部分展示 Demo
   8. ref 、toRef、 toRefs 基礎定義與使用
   9. watch、watchEffect
2. 怎麼轉變的？
   1. 過去的專案是採用 nuxt.js 搭配 vuetify，但因為 Vue3 推出好一陣子後他們還是在 beta 的狀態；因此就改為採用 Quasar 這個已經導入 Vue3 一段時間的框架。
      1. 第一個是他的官方文檔我覺得寫得很好，範例也都很齊全
      2. 第二是社群的聲望也很棒
      3. 其實在決定導入他之前，我就已經使用它依照新系統的 Prototype 做初步的建設，確認各項操作都是可行；同時也把過去用 Vuex 改為使用 Pinia

### 參考資源

1. [這個影片讓你一次搞懂 Vue 2→3 有哪些差異？｜網頁 15 天](https://www.youtube.com/watch?v=Y4fgakCxxd8&ab_channel=%E7%B6%B2%E9%A0%8115%E5%A4%A9)
2. [快来看~~（面试必备）浅谈 vue2 和 vue3 的几点区别](https://juejin.cn/post/7033598281015885854)
3. [面试官：vue3 有了解过吗？能说说跟 vue2 的区别吗？](https://vue3js.cn/interview/vue/vue3_vue2.html#%E4%B8%80%E3%80%81vue3%E4%BB%8B%E7%BB%8D)
4. [（建議收藏）Vue3 對比 Vue2.x 差異性、注意點、整體梳理，與 React hook 比又如何？（面試熱點）](https://www.gushiciku.cn/pl/pnlJ/zh-tw)
