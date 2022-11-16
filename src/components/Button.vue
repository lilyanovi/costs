<template>
    <button @click="showFormToggle">Add new cost +</button>
</template>

<script>
export default {
    name: 'Button',
    methods: {
        showFormToggle() {
            this.$store.commit('setShowForm', !this.$store.state.showForm)
        },
    }
}
</script>