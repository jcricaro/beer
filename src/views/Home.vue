<template>
  <div class="home">
    <Beer :beer="selectedBeer" :show.sync="showDialog" />
    <app-paginator
      :per-page="10"
      :total="25"
      :current-page.sync="page"
      style="width: 100%; text-align: center;"
    />

    <app-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th>
              Image
            </th>
            <th>
              Name
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-if="!isLoading">
            <tr v-for="(beer, index) in beers" :key="index" class="table__item" @click="handleSelectProduct(beer)">
              <td>
                <app-image :src="beer.image_url" :size="200" />
              </td>
              <td>
                <h2>{{ beer.name }} #{{ beer.id }}</h2>
                <span>{{ beer.description }}</span>
              </td>
            </tr>
          </template>
          <tr v-else>
            <td colspan="3" style="text-align: center;">
              Loading...
            </td>
          </tr>
        </tbody>
      </template>
    </app-table>

    <app-paginator
      :per-page="10"
      :total="25"
      :current-page.sync="page"
      style="width: 100%; text-align: center;"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppPaginator from '@/components/AppPaginator.vue'
import AppTable from '@/components/AppTable.vue'
import AppImage from '@/components/AppImage.vue'
import AppCard from '@/components/AppCard.vue'
import http from '@/plugins/http'
import Beer from '@/views/beer/Beer.vue'

export default Vue.extend({
  name: 'home',
  components: {
    AppPaginator,
    AppTable,
    AppImage,
    Beer
  },
  computed: {
    page: {
      get () : number {
        return Number(this.$route.query.page) || 1
      },
      set (page : number) {
        this.$router.push({
          query: { page: page.toString() }
        })
      }
    }
  },
  data: () => ({
    beers: [] as Array<AppBeer>,
    isLoading: false as boolean,
    selectedBeer: null as AppBeer | null,
    showDialog: false
  }),
  methods: {
    handleSelectProduct (beer : AppBeer) {
      this.selectedBeer = beer
      this.showDialog = true
    },
    getBeers () {
      this.isLoading = true
      http.get('beers', {
        params: {
          page: this.page,
          per_page: 10
        }
      }).then(response => {
        this.isLoading = false
        this.beers = response.data
      })
    }
  },
  watch: {
    page: {
      handler (page) {
        this.getBeers()
      },
      immediate: true
    }
  }
})
</script>

<style scoped lang="scss">
.table {
  .table__item {
    cursor: pointer;

    td {
      padding: 20px 10px 40px 10px !important;
    }
  }

  .table__item:hover {
    transform: scale(1.05);
    background: rgb(233, 56, 115) !important;
    color: #FFFFFF;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
  }
}
</style>
