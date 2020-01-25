<template>
  <div class="image" :style="style">
  </div>
</template>

<script type="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppImage',
  props: {
    src: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 60
    }
  },
  computed: {
    style () {
      return {
        width: `${this.size}px`,
        backgroundImage: `url("${this.src}")`,
        height: `${this.size}px`,
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }
    }
  }
})
</script>
