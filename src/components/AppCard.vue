<template>
  <div class="card">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppCard'
})
</script>
