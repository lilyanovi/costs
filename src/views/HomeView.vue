<template>
    <main class="center">
      <router-link to='/add/payment'><Button></Button></router-link>
      
      <nav class="payment_auto">
        <router-link to="/add/payment/food?value=200">Food</router-link>
        <router-link  to="/add/payment/transport?value=50">Transport</router-link>
        <router-link to="/add/payment/credit?value=2000">Credit</router-link>
      </nav>
      <router-view />
      <AddPaymentForm />
      <PaymentsDisplay />
      <Pagination />
      <TotalSum />
    </main> 
  
</template>

<script>
import PaymentsDisplay from '../components/PaymentsDisplay.vue'
import AddPaymentForm from '../components/AddPaymentForm.vue'
import Button from '../components/Button.vue'
import Pagination from '../components/Pagination.vue'
import TotalSum from '../components/TotalSum.vue'

export default {
  name: 'HomeView',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Button,
    Pagination,
    TotalSum
  }
}
</script>

<style>
.center {
    padding-left: calc(50% - 570px);
    padding-right: calc(50% - 570px);
}
.payment_auto{
  display: flex;
  justify-content: center;
  gap: 15px;
}
</style>