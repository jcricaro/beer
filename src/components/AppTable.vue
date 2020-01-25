<template>
  <table class="table">
    <slot />
  </table>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppTable',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    headers: {
      type: Array,
      default: () => []
    }
  }
})
</script>
