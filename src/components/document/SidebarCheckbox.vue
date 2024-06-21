<template>
  <div class="sidebar-checkbox">
    <h3 class="font-bold mb-2">Filter Kategori</h3>
    <div class="filter-group" v-for="filter in filters" :key="filter.name">
      <div @click="clickShowAll">
        <input type="checkbox" :checked="isShowAll" />
        <label class="text-sm ml-1">Tampilkan Semua</label>
      </div>
      <div v-for="option in filter.options" :key="option.value" class="flex items-center">
        <input
          type="checkbox"
          :id="`${filter.name}-${option.value}`"
          :value="option.value"
          :checked="isChecked(filter.name, option.value)"
          @change="updateFilters(filter.name, option.value)"
        />
        <label :for="`${filter.name}-${option.value}`" class="text-sm ml-1">
          {{ option.label }} ({{ documentCounts[option.value] || 0 }})
        </label>
      </div>
    </div>
    <div class="block md:hidden text-sm font-bold mb-5">
      <p>Menampilkan {{ resultCount }} hasil temuan ({{ searchTime }} detik)</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarCheckbox',
  props: {
    filters: {
      type: Array,
      required: true
    },
    documentCounts: {
      type: Object,
      required: true
    },
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
      selectedFilters: {
        kategori: []
      },
      isShowAll: false
    }
  },
  methods: {
    clickShowAll() {
      this.isShowAll = !this.isShowAll
      this.filters.forEach((filter) => {
        filter.options.forEach((option) => {
          const isChecked = this.selectedFilters[filter.name].indexOf(option.value) !== -1
          if (this.isShowAll) {
            if (!isChecked) {
              this.updateFilters(filter.name, option.value)
            }
          } else {
            if (isChecked) {
              this.updateFilters(filter.name, option.value)
            }
          }
        })
      })
    },
    isChecked(filterName, value) {
      return this.selectedFilters[filterName].includes(value)
    },
    updateFilters(filterName, value) {
      const filterArray = this.selectedFilters[filterName]
      const valueIndex = filterArray.indexOf(value)

      if (valueIndex === -1) {
        filterArray.push(value)
      } else {
        filterArray.splice(valueIndex, 1)
      }

      this.emitFilterChange()
    },
    emitFilterChange() {
      this.$emit('filter-change', this.selectedFilters)
    }
  }
}
</script>

<style scoped>
.filter-group {
  margin-bottom: 1rem;
}
</style>
