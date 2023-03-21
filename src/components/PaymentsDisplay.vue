<template>
    <div class="wrapper">
        <div class="costs_title">
          <p>&#8470;</p>
          <p>Date</p>
          <p>Category</p>
          <p>Value</p>
        </div>
        <div class="costs_table" v-for="item of paymentsList" v-bind:key="item.id">
          <p>{{ item.id }}</p>
          <p>{{ item.date }}</p>
          <p>{{ item.type }}</p>
          <p>{{ item.amount }}</p>
        </div>       
    </div>
</template>

<script>
export default {
  name: 'PaymentsDisplay',
  mounted(){
    this.$store.dispatch('fetchData')
  },
  computed: {
    paymentsList() {
      return this.$store.getters.getPaginatedData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;

}
.costs_title, .costs_table {
    display: grid;
    grid-template-columns: 50px repeat(3, 1fr);
    border-bottom: 1px solid grey;
}
.costs_title {
    font-weight: bold;
}
</style>