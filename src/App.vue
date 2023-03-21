<template>
  <div id="app">
    <header class="center">
      <h1>My personal costs</h1>
    </header>

    <main class="center">
      <Button />
      <AddPaymentForm />
      <PaymentsDisplay />
      <Pagination />
      <TotalSum />
    </main> 
  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'
import Button from './components/Button.vue'
import Pagination from './components/Pagination.vue'
import TotalSum from './components/TotalSum.vue'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Button,
    Pagination,
    TotalSum
}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.center {
    padding-left: calc(50% - 570px);
    padding-right: calc(50% - 570px);
}
</style>
