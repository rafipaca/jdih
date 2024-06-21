<template>
  <div class="mb-4 w-full">
    <h2 class="text-2xl font-bold mb-2">Cari dokumen hukum!</h2>
    <div class="border-2 border-[#006859] w-20"></div>
    <div class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-2 mt-8 w-full">
      <!-- Bagian pertama untuk input "Judul" -->
      <div class="relative flex items-center w-full lg:w-1/2">
        <img src="@/assets/book.png" alt="Icon" class="absolute left-0 w-5 h-5 ml-4" />
        <input
          id="judul"
          type="text"
          v-model="searchTerms.title"
          placeholder="Judul"
          class="input shadow-lg input-bordered pl-12 w-full placeholder-center"
          style="height: 55px"
          @focus="handleFocus"
          @blur="handleBlur"
          @keydown.enter="search"
        />
      </div>
      <!-- Bagian kedua untuk input "Nomor", "Tahun", dan tombol Temukan! -->
      <div class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-2 w-full lg:w-1/2">
        <!-- Input "Nomor" -->
        <div class="relative flex items-center w-full lg:w-1/3">
          <img src="@/assets/neraca.png" alt="Icon" class="absolute left-0 w-5 h-5 ml-4" />
          <input
            id="nomor"
            type="text"
            v-model="searchTerms.number"
            placeholder="Nomor"
            class="input shadow-lg input-bordered pl-12 w-full placeholder-center"
            style="height: 55px"
            @focus="handleFocus"
            @blur="handleBlur"
            @keydown.enter="search"
          />
        </div>
        <!-- Input "Tahun" -->
        <div class="relative flex items-center w-full lg:w-1/3">
          <img src="@/assets/calendar.png" alt="Icon" class="absolute left-0 w-5 h-5 ml-4" />
          <input
            id="tahun"
            type="text"
            v-model="searchTerms.year"
            placeholder="Tahun"
            class="input shadow-lg input-bordered pl-12 w-full placeholder-center"
            style="height: 55px"
            @focus="handleFocus"
            @blur="handleBlur"
            @keydown.enter="search"
          />
        </div>
        <!-- Tombol "Temukan!" -->
        <div class="flex justify-items-end justify-end w-full lg:w-1/3">
          <button
            class="btn w-full text-slate-50 bg-[#ffc067] shadow-lg"
            style="height: 55px"
            @click="search"
          >
            Temukan!
          </button>
        </div>
      </div>
    </div>
    <!-- Tampilkan jumlah hasil dan waktu pencarian -->
    <div class="hidden md:block my-6 text-sm">
      <p>Menampilkan {{ resultCount }} hasil temuan ({{ searchTime }} detik)</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocumentFilter',
  props: {
    resultCount: {
      type: Number,
      required: true
    },
    searchTime: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      searchTerms: {
        title: '',
        number: '',
        year: ''
      },
      showErrorMessage: false
    }
  },
  methods: {
    handleFocus(event) {
      event.target.placeholder = ''
    },
    handleBlur(event) {
      const placeholders = {
        judul: 'Judul',
        nomor: 'Nomor',
        tahun: 'Tahun'
      }
      const id = event.target.id
      if (!event.target.value) {
        event.target.placeholder = placeholders[id]
      }
    },
    search() {
      this.$emit('search', this.searchTerms)
    }
  },
  watch: {
    resultCount(newCount) {
      this.showErrorMessage = newCount === 0
    }
  }
}
</script>

<style scoped>
.placeholder-center {
  text-align: center;
}
</style>
