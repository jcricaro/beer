<template>
  <div class="dialog__overlay" :style="{ display: show ? 'flex' : 'none' }" @click.self="$emit('update:show', false)">
    <div class="dialog__content" :style="{ width: `${width}px` }">
      <slot />
    </div>
  </div>
</template>

<script type="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppDialog',
  props: {
    width: {
      type: Number,
      default: 800
    },
    show: {
      type: Boolean,
      default: true
    }
  }
})
</script>
