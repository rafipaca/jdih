<template>
  <div
    @click="handleClick"
    class="relative flex flex-col items-center sm:flex-row card card-side bg-base-100 border shadow-lg sm:mb-4 sm:h-52 sm:pt-9 sm:pb-9 mb-5 sm:mb-4 hover:bg-[#9AD0C2] transition-colors duration-300"
  >
    <!-- Left section for the date and month (1/6 of the card) -->
    <div
      class="flex flex-row sm:flex-col sm:ml-5 mt-10 sm:mt-0 items-center justify-center text-center text-black w-1/6 rounded-l-lg sm:border-r-2 sm:border-[#006859]"
    >
      <span class="text-5xl font-black text-[#004E43]">{{ document.date }}</span>
      <div
        class="rounded-lg bg-[#006859] h-10 flex items-center sm:h-full ml-4 sm:mt-4 sm:ml-0 p-1 pr-4 pl-4"
      >
        <span class="text-sm text-white">{{ document.month }}</span>
      </div>
    </div>
    <div class="sm:hidden w-2/6 sm:h-0.5 sm:mt-4 sm:-mb-3  bg-primary rounded"></div>
    <!-- Right section for the content (5/6 of the card) -->
    <div class="card-body justify-center mt-8 text-center sm:text-left w-full">
      <h2 class="card-title">{{ document.title }}</h2>
      <p class="text-sm">{{ truncatedDescription }}</p>
      <div class="relative card-actions justify-center mt-4 my-5 my-0 sm:justify-end">
        <button
          @click.stop="handleDownload"
          class="btn relative z-10 text-slate-50 bg-[#ffc067] shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffc067]"
        >
          Unduh
        </button>
      </div>
      <div class="hidden sm:block sm:flex items-center gap-2 justify-center sm:justify-start sm:-mt-14 text-gray-600">
        <div class="flex items-center">
          <span class="material-icons">event</span>
          <span class="ml-1">{{ document.year }}</span>
        </div>
        <div class="flex items-center">
          <span class="material-icons">file_download</span>
          <span class="ml-1">{{ document.downloads }}</span>
        </div>
        <div class="flex items-center">
          <span class="material-icons">visibility</span>
          <span class="ml-1">{{ document.views }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocumentItem',
  props: {
    document: {
      type: Object,
      required: true
    }
  },
  computed: {
    truncatedDescription() {
      const words = this.document.description.split(' ')
      const maxWords = 30 // Change this value to set the limit of words
      if (words.length > maxWords) {
        return words.slice(0, maxWords).join(' ') + '...'
      }
      return this.document.description
    }
  },
  methods: {
    handleClick() {
      window.scrollTo(0, 0)
      this.$emit('card-click', this.document.id)  
    },
    handleDownload(event) {
      event.stopPropagation(); // Stop event propagation manually
      const link = this.document.link;
      if (link) {
        window.open(link, '_blank') // Open the link in a new tab
      } else {
        console.log('No download link available for document', this.document.id)
      }
    }
  }
}
</script>

<style scoped>
.material-icons {
  font-size: 16px;
}
.btn-outline {
  @apply border border-gray-300 text-gray-600;
}
.btn-secondary {
  @apply bg-transparent hover:bg-gray-100;
}

.card:hover {
  @apply bg-green-100;
}

.card {
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.card:hover .btn {
  background-color: white;
  color: black;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.btn {
  padding: 0.5rem 1rem; /* Ensure the button has sufficient padding */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
}
</style>
