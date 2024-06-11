<template>
  <div class="pagination-container">
    <button
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      class="pagination-item"
      :class="{ 'btn-active': pageNumber === currentPage }"
      @click="goToPage(pageNumber)"
    >
      {{ pageNumber }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'PaginationComponent',
  props: {
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  methods: {
    goToPage(pageNumber) {
      // Emit an event to the parent component with the selected page number
      this.$emit('page-change', pageNumber)
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped>
.pagination-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.pagination-item {
  background-color: #ffc067;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.pagination-item:hover {
  background-color: #ffa500;
}

.pagination-item:active {
  background-color: #ff8c00;
}

.pagination-item.btn-active {
  background-color: #ff7f50;
}
</style>
