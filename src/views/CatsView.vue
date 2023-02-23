<template>
  <div>
    <h1>Cats For Adoption</h1>
    <b-table striped hover :items="cats">
      <template  #cell(name)="data">
        <router-link :to="`/pets/cats/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
// import cats from '../data/cats'
import { mapState } from 'vuex'
// import cats from '@/data/cats'
// @對源目錄引用(../data/cats)
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}

</script>
