<template>
  <app-dialog :show.sync="showDialog" :width="700">
    <app-card>
      <template v-if="beer">
        <div class="product__details">
          <div class="product__image">
            <app-image :src="beer.image_url" :size="250" />
          </div>
          <div class="product__description">
            <h3 class="description__title">{{ beer.name }} #{{ beer.id }}</h3>
            <span class="description__subtitle" v-html="beer.tagline" />
            <p v-html="beer.description" />

            <button
              v-if="existsOnCart"
              class="btn"
              @click="handleRemoveCartItem(beer)"
            >
              Remove from cart
            </button>
            <button
              v-else
              class="btn"
              @click="handleAddCartItem(beer)"
            >
              Add to cart
            </button>
          </div>
        </div>
      </template>
    </app-card>
  </app-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import AppImage from '@/components/AppImage.vue'
import AppCard from '@/components/AppCard.vue'
import AppDialog from '@/components/AppDialog.vue'
import { mapActions, mapGetters } from 'vuex'

export default Vue.extend({
  name: 'Beer',
  props: {
    beer: {
      type: Object
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  components: {
    AppCard,
    AppImage,
    AppDialog
  },
  computed: {
    ...mapGetters({
      cartItems: 'cart/items'
    }),
    showDialog: {
      get (): boolean {
        return this.show
      },
      set (value: boolean) {
        this.$emit('update:show', value)
      }
    },
    existsOnCart (): boolean {
      return this.cartItems.some((beer: AppBeer) => beer.id === this.beer.id)
    }
  },
  methods: {
    ...mapActions({
      addCartItem: 'cart/addItem',
      removeCartItem: 'cart/removeItem'
    }),
    handleAddCartItem (selectedBeer: AppBeer) {
      this.addCartItem(selectedBeer)
    },
    handleRemoveCartItem (item: AppBeer) {
      this.removeCartItem(item.id)
    }
  }
})
</script>

<style scoped lang="scss">
.product__details {
  display: flex;
  flex-direction: row;

  .description__title {
    margin: 0;
    font-size: 32px;
  }

  .description__subtitle {
    font-size: 14px;
    color: #6d6d6d;
  }
}
</style>
