<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index" class="cart__item">
        <div class="item__description">
          <h2 class="item__name">
            {{ item.name }}
          </h2>
        </div>
        <div class="item__image">
          <AppImage :src="item.image_url" />
        </div>
        <div class="item_actions">
          <button class="btn" @click="handleRemoveItem(item)">remove</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import AppImage from '@/components/AppImage.vue'

export default Vue.extend({
  name: 'Cart',
  components: {
    AppImage
  },
  computed: {
    ...mapGetters({
      items: 'cart/items'
    })
  },
  methods: {
    ...mapActions({
      removeItem: 'cart/removeItem'
    }),
    handleRemoveItem (item: AppBeer) {
      this.removeItem(item.id)
    }
  }
})
</script>

<style scoped lang="scss">
ul {
  margin: 0;
  padding: 0;
  .cart__item {
    list-style-type: none;
    background: #eeeeee;
    height: 60px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 30px 10px;
    border-radius: 10px;

    .item__description {
      flex-grow: 1;
    }

    .item__image {
      margin: 0 20px;
    }

    .item__name {
      font-weight: bold;
      font-size: 18px;
    }

    .item__actions {
      width: 60px;
      color: red;
    }
  }
}
</style>
