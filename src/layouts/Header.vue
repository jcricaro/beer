<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/cart">Cart ({{ itemCount }})</router-link>
      </nav>
    </div>
  </header>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'Header',
  computed: {
    ...mapGetters({
      items: 'cart/items'
    }),
    itemCount () {
      return this.items.length
    }
  }
})
</script>

<style lang="scss">
.header {
  background: #C2F0FD;
  width: 100%;
  height: 50px;
  position: fixed;
  color: #1ABAF9;
  padding: 20px 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  z-index: 500;
  .container {
    display: flex;
    flex-direction: row;
    .nav {
      flex-grow: 1;
      a {
        transition:all 0.2s ease;
        text-decoration: none;
        color: #1ABAF9;
        border-radius: 10px;
        font-weight: bold;
      }

      a:not(:first-child) {
        margin-left: 40px;
      }

      a:hover {
        color: rgb(118, 216, 255);
      }
    }
  }
}
</style>
