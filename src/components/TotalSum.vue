<template>
    <p>Total: {{ getSumValue }}</p>
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