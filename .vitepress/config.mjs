import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Sam Dengler',
  description: 'Personal blog',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/samdengler' }
    ]
  }
})
