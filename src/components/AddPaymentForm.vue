<template>
    <div class="form">
        <input placeholder="Amount" v-model="amount" />
        <input placeholder="Type" v-model="type" />
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
    props: {
        items: {
            type: Array,
            default: []
        },
    },
    computed: {
        getCurrentDate(){
            const today = new Date();
            const d = today.getDate();
            const m = today.getMonth() + 1;
            const y = today.getFullYear();
            return `${d}.${m}.${y}`
        }
    },
    methods: {
        onSaveClick(){
            const data = {
                id: this.getId(),
                amount: +this.amount,
                type: this.type,
                date: this.date || this.getCurrentDate
            };
            this.$emit('addNewPayment', data);
            this.amount = '';
            this.type = '';
            this.date = '';

        },
        getId() {
            return (
                this.items.map(({ id }) => id).sort((a, b) => a - b)[
                    this.items.length - 1] + 1
            );
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