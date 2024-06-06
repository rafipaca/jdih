<template>
    <div class="card w-full bg-base-100 shadow-xl">
      <figure><img :src="image" alt="VR" /></figure>
      <div class="card-body">
        <h2 class="card-title">{{ title }}</h2>
        <p>{{ description }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">More</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FeedItem',
    props: {
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  };
  </script>