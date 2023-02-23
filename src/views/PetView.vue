<template>
  <div>
    <!-- {{ $route.params.species }} -->
    <!-- 路線參數 -->
    <!-- {{ $route.params.id }} -->
    <h1>{{ animal.name }} ({{ $route.params.species }})</h1>
    <p>Age: {{ animal.age }} years old</p>
    <p>Breed: {{ animal.breed }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      animal: {}
    }
  },
  computed: {
    // cats() {
    //   return this.$store.state.cats
    // }
    // 相等於...mapState
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted() {
  // this.cats=this['cats']
    const animal = this[this.$route.params.species][this.$route.params.id]
    this.animal = animal
    // 設置 data 內的 animal object
  }
}
</script>
