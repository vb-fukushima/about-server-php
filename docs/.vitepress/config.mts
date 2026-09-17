import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'サーバーとPHPの話',
  description: '社内デザイナー向け勉強会:フォームの「送信ボタンを押した後」に何が起きているか',
  base: '/about-server-php/',
  themeConfig: {
    nav: [
      { text: 'トップ', link: '/' },
      { text: 'ハンズオン', link: '/handson' },
    ],
    sidebar: [
      {
        text: '資料',
        items: [
          { text: 'ハンズオン本編', link: '/handson' },
        ],
      },
    ],
    socialLinks: [],
  },
})
