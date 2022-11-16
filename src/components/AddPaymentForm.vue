<template>
    <div class="form" v-if="showForm">
        <input placeholder="Amount" v-model="amount" />
        <select v-model="type">
            <option v-for="option in options" :key="option">
                {{ option }}
            </option>
        </select>
        <input placeholder="Date" v-model="date" />
        <button @click="onSaveClick">Save</button>
    </div>
</template>

<script>
export default {
    name: "AddPaymentForm",
    data() {
        return {
            amount: '',
            type: '',
            date: '',
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
        }
    },
    methods: {
        onSaveClick(){
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

        }
    },
    mounted() {
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