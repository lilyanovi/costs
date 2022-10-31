<template>
    <button @click="onClick">Add new cost +</button>
</template>

<script>
export default {
    name: 'Button',
    methods: {
        onClick() {
            this.$emit('showFormClick')
        }
    }
}
</script>