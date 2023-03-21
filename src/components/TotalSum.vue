<template>
    <h1 class="title font-weight-medium pa-3" 
    >Total: {{ getSumValue }}</h1>
</template>

<script>
export default {
    name: 'TotalSum',
    computed: {
        getSumValue() {
            return this.$store.getters.getFullPaymentValue
        }
    }
}
</script>