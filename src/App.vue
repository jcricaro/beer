<template>
  <div id="app">
    <Header />
    <section class="content">
      <div class="container">
        <router-view/>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '@/layouts/Header'
export default Vue.extend({
  name: 'App',
  components: {
    Header
  }
})
</script>
