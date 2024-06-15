<template>
  <div>
    <h3 class="font-bold mb-2">Kategori</h3>
    <div class="filter-group" v-for="filter in filters" :key="filter.name">
      <div @click="clickShowAll()">
        <input type="checkbox" value="tes" :checked="isShowAll" />
        <label class="text-sm ml-1" for="showall">Tampilkan Semua</label>
      </div>
      <div v-for="option in filter.options" :key="option.value">
        <input
          type="checkbox"
          :id="`${filter.name}-${option.value}`"
          :value="option.value"
          :checked="isChecked(filter.name, option.value)"
          @change="updateFilters(filter.name, option.value)"
        />
        <label :for="`${filter.name}-${option.value}`" class="text-sm ml-1">{{
          option.label
        }}</label>
      </div>
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
    }
  },
  data() {
    return {
      selectedFilters: {
        kategori: []
        // Tambahkan filter lain di sini jika diperlukan
      },
      isShowAll: false
    }
  },
  methods: {
    clickShowAll() {
      this.isShowAll = !this.isShowAll
      this.filters.map((filter) => {
        filter.options.map((option) => {
          const isChecked = this.selectedFilters[filter.name].indexOf(option.value) != -1
          if (this.isShowAll) {
            if (!isChecked) {
              this.updateFilters(filter.name, option.value)
            }
          } else if (!this.isShowAll) {
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
.sidebar-checkbox {
  padding: 1rem;
}
.filter-group {
  margin-bottom: 1rem;
}
</style>
