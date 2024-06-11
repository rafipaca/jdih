<template>
  <div class="card w-96 bg-base-100 shadow-xl hover:bg-green-200 transition duration-300 ease-in-out">
    <figure><img src="..\..\assets\Rectangle 42.png" alt="VR" /></figure>
    <div class="card-body">
      <p class="text-sm" style="color: #9AD0C2;">2 Mei 2024 | Video</p>
      <h2 class="card-title text-base">Pelantikan PJ Bupati Tulang Bawang Barat Dan Pengukuhan Kembali PJ Bupati Pringsewu Dan Mesuji</h2>
      <p class="text-sm">selengkapnya ...</p>
      <div class="card-actions justify-end">
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
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>
