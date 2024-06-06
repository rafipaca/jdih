<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <FeedItem
        v-for="(item, index) in items"
        :key="index"
        :image="item.image"
        :title="item.title"
        :description="item.description"
      />
    </div>
  </template>
  
  <script>
  import FeedItem from './FeedItem.vue';
  
  export default {
    name: 'Feed',
    components: {
      FeedItem,
    },
    data() {
      return {
        items: [
          {
            image: 'path/to/image1.jpg',
            title: 'Title 1',
            description: 'Description 1',
          },
          // Add more items as needed
        ],
      };
    },
  };
  </script>