<template>
    <div>
      <div class="decor-top"></div>
      <div class="content-container flex flex-col items-center min-h-screen pb-5">
        <slot></slot>
      </div>
      <div class="decor-bottom"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DecorFeed'
  }
  </script>
  
  <style scoped>
  .decor-top,
  .decor-bottom {
    position: static;
    left: 0;
    width: 100vw;
    z-index: -1; /* Pastikan dekorasi ada di bawah elemen utama */
  }
  
  .decor-top {
    top: 0;
    height: 75px; /* Sesuaikan tinggi sesuai dekorasi */
    background: url('@/assets/decor-feed-top.png') center center repeat-x;
    background-size: cover;
  }
  
  .decor-bottom {
    bottom: 0;
    height: 100px; /* Sesuaikan tinggi sesuai dekorasi */
    background: url('@/assets/decor-feed-bottom.png') center center repeat-x;
    background-size: cover;
  }
  
  .content-container {
    z-index: 0; /* Pastikan konten berada di atas dekorasi */
    margin-top: 25px; /* Berikan jarak sehingga konten tidak tertutup dekorasi atas */
    margin-bottom: 150px; /* Berikan jarak sehingga konten tidak tertutup dekorasi bawah */
  }
  </style>
  