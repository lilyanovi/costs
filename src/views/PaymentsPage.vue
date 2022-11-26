<template>
    <div class="form" v-if="showForm">
        <input placeholder="Amount" v-model="amount" />
        <select v-model="type" >
            <option v-for="option in options" :key="option" v-bind:value="option" >
                {{ option }}
            </option>
        </select>
        <input placeholder="Category" v-model="type"/>
        <input placeholder="Date" v-model="date"/>
        <button @click="onSaveClick">Save</button>
    </div>
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

<style scoped lang="scss">
.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px;
    max-width: 300px;
    border: 1px solid grey;
}
</style>