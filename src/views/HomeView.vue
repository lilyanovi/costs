<template>
  <v-container >
    <v-row>
      <v-layout align-center  column>
        <v-btn  
          color="success"
          to='/add/payment'
          class="ma-3"
          >
          <Button></Button>
        </v-btn>
        
        <v-layout justify-center class="ma-3">
          <div>
            <v-btn text  small to="/add/payment/food?value=200">Food</v-btn>
          </div>
          <div>
            <v-btn text  small to="/add/payment/transport?value=50">Transport</v-btn>
          </div>
          <div>
            <v-btn text  small to="/add/payment/credit?value=2000">Credit</v-btn>
          </div>
        </v-layout>

        <router-view />
      </v-layout>
    </v-row>
    <v-row>
      <v-col>  
        <PaymentsDisplay />
        <Pagination />
        <TotalSum />        
      </v-col>
      <v-col>      
       
        <ChartOfCosts />
      </v-col>
      </v-row>
    </v-container> 
</template>

<script>
import PaymentsDisplay from '../components/PaymentsDisplay.vue'
import Button from '../components/Button.vue'
import Pagination from '../components/Pagination.vue'
import TotalSum from '../components/TotalSum.vue'
import ChartOfCosts from '../components/ChartOfCosts.vue'


export default { 
  name: 'HomeView',
  components: {
    PaymentsDisplay,
    Button,
    Pagination,
    TotalSum,
    ChartOfCosts
  },
  methods: {
        show() {
          this.isShown = true;
        },
        hide() {
          this.isShown = false;
          console.log("hide")
        },
      },
  mounted() {
    this.$context.EventEmitter.$on("show", this.show);
    this.$context.EventEmitter.$on("hide", this.hide);
   
  }
}
  
</script>
