<template>
    <DecorFeed>
    <div class="w-[10vw]">
      <!-- Breadcrumb -->
      <div class="text-sm italic font-light flex justify-center mt-5 text-[#2D9596]">
        <ul class="flex">
          <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center">
            <a v-if="crumb.url" :href="crumb.url">{{ crumb.text }}</a>
            <span v-else>{{ crumb.text }}</span>
            <span v-if="index < breadcrumbs.length - 1" class="mx-2">/</span>
          </li>
        </ul>
      </div>
      <div class="text-4xl text-center mt-2 font-bold">Feed</div>
      <div class="border-t-4 border-[#006859] w-[55%] mx-auto mb-2 mt-6"></div>
      <section class="flex flex-col lg:flex-row items-start justify-center py-2 px-4">
        <div class="text-center mb-8"></div>
        <div class="flex flex-col lg:flex-row items-start justify-center w-full">
          <aside class="w-full lg:w-[18%] p-2">
            <Sidebar @changeContent="changeContent" />
          </aside>
          <main class="w-full lg:w-[75%] p-2">
            <component :is="currentComponent" />
          </main>
        </div>
      </section>
    </div>
  </DecorFeed>
</template>

<script>
import { ref } from 'vue'
import Feed from '../components/feed/Feed.vue'
import DecorFeed from '../components/feed/DecorFeed.vue'

export default {
  name: 'FeedView',
  components: {
    Feed,
    DecorFeed
  },
  setup() {
    const currentComponent = ref('Feed')
    const breadcrumbs = ref([{ text: 'Feed', url: '/feed' }, { text: '' }])

    const changeContent = (componentName) => {
      currentComponent.value = componentName
      updateBreadcrumbs(componentName)
    }

    const updateBreadcrumbs = (componentName) => {
      const breadcrumbMap = {
        DetailBerita: 'Detail Berita'
      }
      breadcrumbs.value = [
        { text: 'Feed', url: '/feed-detail' },
        { text: breadcrumbMap[componentName] }
      ]
    }

    return {
      currentComponent,
      changeContent,
      breadcrumbs
    }
  }
}
</script>