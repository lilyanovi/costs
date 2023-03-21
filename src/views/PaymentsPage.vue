<template>
    <v-flex sm6>
    <v-card>
        <v-layout wrap align-space-between justify-center column fill-height 
            v-if="showForm"
            class="pa-3"
            >
            <v-flex xs12 sm6 d-flex>
                <v-text-field  placeholder="Amount" v-model="amount" solo />
            </v-flex>
                      
            <v-flex xs12 sm6 d-flex>
                <v-select
                    v-model="type"
                    label="Category"
                    :items=options
                    solo
                >            
                </v-select>
            </v-flex>

            <v-flex xs12 sm6 d-flex>
                <v-text-field 
                    placeholder="Transport" 
                    v-model="type"
                    label="Other category"
                    solo
                >
                </v-text-field>
            </v-flex>

            <v-flex xs12 sm6 d-flex>
                <v-text-field  label="Date" placeholder="Date" v-model="date" solo/>
            </v-flex>

            <v-btn block 
                @click="onSaveClick" 
                color="green" 
                dark
                >Save
            </v-btn>

        </v-layout>
    </v-card>
</v-flex>
</template>

<script>
export default {
    name: "AddPaymentForm",
    props: {
    to: Number,
  },
    data() {
        return {   
            
            type: this.$route.params.type,
            amount: this.$route.query.value,
            date: this.getCurrentDate,
           
        }
    },
    computed: {
        getCurrentDate(){
            const today = new Date();
            const d = today.getDate();
            const m = today.getMonth() + 1;
            const y = today.getFullYear();
            return `${d}.${m}.${y}`
        },
        showForm() {
            return this.$store.getters.getShowForm;
        },
        options(){
            return this.$store.getters.getCategoryList
        },
       
    },
    methods: {
        onSaveClick(){
            if(this.type !=='' && this.amount !==''){
            const data = {
                id: this.$store.getters.getId + 1,
                amount: +this.amount,
                type: this.type,
                date: this.date || this.getCurrentDate
            };
            this.$store.commit('addDataToPaymentsList', data);
            this.amount = '';
            this.type = '';
            this.date = '';
            } else {
                console.log('Please, fill in the type and amount of spending')
            }
        }
    },
    mounted() {
        if(this.$route.params.type  && this.$route.query.value ){
            this.onSaveClick();
        }

        if(!this.type?.length){
            this.$store.dispatch('fetchCaterory')
        }
    }
}
</script>

