<template>
  <div class="grid grid-cols-3 gap-8 p-8 ml-28">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="card w-96 bg-base-100 shadow-xl hover:bg-green-200 transition duration-300 ease-in-out"
    >
      <figure>
        <img :src="item.image" alt="VR" />
      </figure>
      <div class="card-body">
        <p class="text-sm" style="color: #9AD0C2;">{{ item.date }} | Video</p>
        <h2 class="card-title text-base">{{ item.title }}</h2>
        <p class="text-sm">selengkapnya ...</p>
        <div class="card-actions justify-end"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Feed",
  data() {
    return {
      items: [
        {
          image: "src/assets/Rectangle 42.png",
          date: "2 Mei 2024",
          title: "Pelantikan PJ Bupati Tulang Bawang Barat Dan Pengukuhan Kembali PJ Bupati Pringsewu Dan Mesuji",
        },
        {
          image: "src/assets/Rectangle 42.png",
          date: "2 Mei 2024",
          title: "Pelantikan PJ Bupati Tulang Bawang Barat Dan Pengukuhan Kembali PJ Bupati Pringsewu Dan Mesuji",
        },
        {
          image: "src/assets/Rectangle 42.png",
          date: "2 Mei 2024",
          title: "Pelantikan PJ Bupati Tulang Bawang Barat Dan Pengukuhan Kembali PJ Bupati Pringsewu Dan Mesuji",
        },
        {
          image: "src/assets/Rectangle 42.png",
          date: "2 Mei 2024",
          title: "Pelantikan PJ Bupati Tulang Bawang Barat Dan Pengukuhan Kembali PJ Bupati Pringsewu Dan Mesuji",
        },
        {
          image: "src/assets/Rectangle 42.png",
          date: "2 Mei 2024",
          title: "Pelantikan PJ Bupati Tulang Bawang Barat Dan Pengukuhan Kembali PJ Bupati Pringsewu Dan Mesuji",
        },
        {
          image: "src/assets/Rectangle 42.png",
          date: "2 Mei 2024",
          title: "Pelantikan PJ Bupati Tulang Bawang Barat Dan Pengukuhan Kembali PJ Bupati Pringsewu Dan Mesuji",
        },
        {
          image: "src/assets/Rectangle 42.png",
          date: "2 Mei 2024",
          title: "Pelantikan PJ Bupati Tulang Bawang Barat Dan Pengukuhan Kembali PJ Bupati Pringsewu Dan Mesuji",
        },
        {
          image: "src/assets/Rectangle 42.png",
          date: "2 Mei 2024",
          title: "Pelantikan PJ Bupati Tulang Bawang Barat Dan Pengukuhan Kembali PJ Bupati Pringsewu Dan Mesuji",
        },
        {
          image: "src/assets/Rectangle 42.png",
          date: "2 Mei 2024",
          title: "Pelantikan PJ Bupati Tulang Bawang Barat Dan Pengukuhan Kembali PJ Bupati Pringsewu Dan Mesuji",
        }
      ],
    };
  },
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
</style>
