<template>
  <div id="app">
    <header class="center">
      <h1>My personal costs</h1>
    </header>

    <main class="center">
      <Button @showFormClick = "showFormToggle" />
      <AddPaymentForm @addNewPayment="addNewPayment" :items="paymentsList" v-if="showForm" />
      <PaymentsDisplay :items="paginatedData" />
      <Pagination :items="paymentsList" :totalPages="totalPages" :perPage="perPage" 
      :currentPage="currentPage" @pagechanged="onPageChange" />
    </main> 
  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'
import Button from './components/Button.vue'
import Pagination from './components/Pagination.vue'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Button,
    Pagination
  },
  data(){
    return {
      paymentsList: [],
      showForm: false,
      maxVisibleButtons: 3,
      perPage: 4,
      currentPage: 1,
      isPopupActive: false
    }
  },
  methods: {
    fetchData(){
      return [
        {
          id: 1,
          date:'22.10.2022',
          type: 'Food',
          amount: 170
        },
        {
          id: 2,
          date:'23.10.2022',
          type: 'Transport',
          amount: 200
        },
        {
          id: 3,
          date:'24.10.2022',
          type: 'Food',
          amount: 700
        },
        {
          id: 4,
          date:'24.10.2022',
          type: 'Food',
          amount: 670
        },
        {
          id: 5,
          date:'25.10.2022',
          type: 'Health',
          amount: 2000
        },
        {
          id: 6,
          date:'25.10.2022',
          type: 'Sport',
          amount: 30
        },
        {
          id: 7,
          date:'26.10.2022',
          type: 'Food',
          amount: 1700
        },
        {
          id: 8,
          date:'27.10.2022',
          type: 'Health',
          amount: 5000
        },
        { id: 9,
          date:'28.10.2022',
          type: 'Food',
          amount: 120
        }
      ]
    },
    addNewPayment(data){
      this.paymentsList=[...this.paymentsList, data]
    },
    showFormToggle() {
      this.showForm = !this.showForm
    },
    onPageChange(page) {
      console.log(page);
      this.currentPage = page;
    }
  },
  computed: {
    totalPages() {
      let l = this.paymentsList.length,
        s = this.perPage;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.perPage,
        end = start + this.perPage;
      return this.paymentsList.slice(start, end);
    },
  },
    created() {
      this.paymentsList = this.fetchData();
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
