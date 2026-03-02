import { defineConfig } from 'vitepress'
import { getPosts } from './theme/serverUtils'

const pageSize = 10

export default defineConfig({
    title: 'Sam Dengler',
    base: '/',
    cacheDir: './node_modules/vitepress_cache',
    description: 'Personal blog',
    ignoreDeadLinks: true,
    themeConfig: {
        posts: await getPosts(pageSize),
        website: 'https://github.com/samdengler',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Archives', link: '/pages/archives' },
            { text: 'Tags', link: '/pages/tags' },
            { text: 'About', link: '/pages/about' }
        ],
        search: {
            provider: 'local'
        },
        outline: {
            label: 'On this page'
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/samdengler' }]
    },
    srcExclude: ['README.md'],
    vite: {}
})
