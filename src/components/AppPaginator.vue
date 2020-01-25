<template>
  <ul class="paginator__list">
    <li class="paginator__list-item">
      <button class="btn">back</button>
    </li>
    <li class="paginator__list-item" v-for="(page, index) in pages" :key="index">
      <button class="btn" @click="changePage(page.page)">{{ page.page }}</button>
    </li>
    <li class="paginator__list-item">
      <button class="btn">next</button>
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
    changePage (page: number): void {
      this.$emit('update:currentPage', page)
    }
  }
})
</script>
