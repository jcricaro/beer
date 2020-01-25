<template>
  <ul class="paginator__list">
    <li class="paginator__list-item">
      <button class="btn" @click="handlePreviousPage">back</button>
    </li>
    <li class="paginator__list-item" v-for="(page, index) in pages" :key="index">
      <button class="btn" @click="handleChangePage(page.page)">{{ page.page }}</button>
    </li>
    <li class="paginator__list-item">
      <button class="btn" @click="handleNextPage">next</button>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppPaginator',
  props: {
    currentPage: {
      default: 1,
      type: Number
    },
    total: {
      required: true,
      type: Number
    },
    perPage: {
      default: 15,
      type: Number
    }
  },
  computed: {
    pages (): Array<Object> {
      return Array(Math.ceil(this.total / this.perPage)).fill({}).map((page, index) => ({
        page: index + 1
      }))
    }
  },
  methods: {
    handleChangePage (page: number): void {
      this.$emit('update:currentPage', page)
    },
    handleNextPage () {
      this.$emit('update:currentPage', this.currentPage === this.pages.length ? this.currentPage : this.currentPage + 1)
    },
    handlePreviousPage () {
      this.$emit('update:currentPage', this.currentPage === 1 ? this.currentPage : this.currentPage - 1)
    }
  }
})
</script>
