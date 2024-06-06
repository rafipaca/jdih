<template>
  <div class="mb-4 w-full">
    <h2 class="text-2xl font-bold mb-2">Cari dokumen hukum!</h2>
    <div class="border-2 border-[#006859] w-20 "></div>
    <div class="flex space-x-2 mt-8 w-full">
      <!-- Bagian pertama untuk input "Judul" -->
      <div class="relative flex items-center w-1/2">
        <img src="@/assets/book.png" alt="Icon" class="absolute left-0 w-5 h-5 ml-4" />
        <input
          id="judul"
          type="text"
          v-model="searchTerms.title"
          placeholder="Judul"
          class="input shadow-lg input-bordered pl-12 w-full placeholder-center"
          style="height: 55px;"
          @focus="handleFocus"
          @blur="handleBlur"
          @keydown.enter="search"
        />
      </div>
      <!-- Bagian kedua untuk input "Nomor", "Tahun", dan tombol Temukan! -->
      <div class="flex space-x-2 w-1/2">
        <!-- Input "Nomor" -->
        <div class="relative flex items-center w-1/3">
          <img src="@/assets/neraca.png" alt="Icon" class="absolute left-0 w-5 h-5 ml-4" />
          <input
            id="nomor"
            type="text"
            v-model="searchTerms.number"
            placeholder="Nomor"
            class="input shadow-lg input-bordered pl-12 w-full placeholder-center"
            style="height: 55px;"
            @focus="handleFocus"
            @blur="handleBlur"
            @keydown.enter="search"
          />
        </div>
        <!-- Input "Tahun" -->
        <div class="relative flex items-center w-1/3">
          <img src="@/assets/calendar.png" alt="Icon" class="absolute left-0 w-5 h-5 ml-4" />
          <input
            id="tahun"
            type="text"
            v-model="searchTerms.year"
            placeholder="Tahun"
            class="input shadow-lg input-bordered pl-12 w-full placeholder-center"
            style="height: 55px;"
            @focus="handleFocus"
            @blur="handleBlur"
            @keydown.enter="search"
          />
        </div>
        <!-- Tombol "Temukan!" -->
        <div class="flex justify-items-end justify-end w-1/3">
          <button class="btn w-full text-slate-50 bg-[#ffc067] shadow-lg" style="height: 55px;" @click="search">Temukan!</button>
        </div>
      </div>
    </div>
    <!-- Buat logika dimana hasil dari filter atau hasil dari pencarian biasa itu menemukan ada berapa count data static pake JS -->
    <div class="my-6 text-sm">
      <p>Menampilkan  10.918 hasil temuan (0,25 seconds)</p> 
    </div>
    
    <!-- Error message -->
    <div v-if="showErrorMessage" class="text-red-500 mt-6 ml-52 flex justify-center items-center h-10">
      Tidak ada hasil yang ditemukan.
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocumentFilter',
  data() {
    return {
      searchTerms: {
        title: '',
        number: '',
        year: ''
      },
      showErrorMessage: false // Flag to control error message visibility
    }
  },
  methods: {
    handleFocus(event) {
      event.target.placeholder = '';
    },
    handleBlur(event) {
      const placeholders = {
        judul: 'Judul',
        nomor: 'Nomor',
        tahun: 'Tahun'
      };
      const id = event.target.id;
      if (!event.target.value) {
        event.target.placeholder = placeholders[id];
      }
    },
    search() {
      this.$emit('search', this.searchTerms);
      // Show error message by default
      this.showErrorMessage = this.filteredDocuments.length === 0;
    }
  }
}
</script>

<style scoped>
.placeholder-center {
  text-align: center;
} 
</style>
