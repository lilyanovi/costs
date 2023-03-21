<template>
    <ul class="pagination">
        <li>
            <button type="button" @click="onClickFirstPage" 
            :disabled="isInFirstPage">&#60;</button>
        </li>
        <li>
            <button type="button" @click="onClickPreviousPage" 
            :disabled="isInFirstPage">&#60;&#60;</button>
        </li>
    
        <li v-for="page, index in pages" :key="index">
            <button type="button" @click="onClickPage(page.name)" 
            :disabled="page.isDisabled">{{ page.name }}</button>
        </li>
    
        <li>
            <button type="button" @click="onClickNextPage" 
            :disabled="isInLastPage">&#62;&#62;</button>
        </li>
        <li>
            <button type="button" @click="onClickLastPage" 
            :disabled="isInLastPage">&#62;</button>
        </li>
    </ul>
</template>

<script>
export default {
    name: "Pagination",
    computed: { 
        startPage() {
            if (this.$store.getters.getCurrentPage === 1) {
            return 1;
            }

            if (this.$store.getters.getCurrentPage === this.$store.getters.getTotalPages) {
                if((this.$store.getters.getTotalPages - this.$store.getters.getMaxVisibleButtons)>=1){
                    return this.$store.getters.getTotalPages - this.$store.getters.getMaxVisibleButtons;
                } else {
                    return 1;
                }
            }

            return this.$store.getters.getCurrentPage - 1;
        },
        endPage() {
            return Math.min(
                this.startPage + this.$store.getters.getMaxVisibleButtons - 1,
                this.$store.getters.getTotalPages
            );
        },
        pages() {
            const range = [];

            for (
            let i = this.startPage;
            i <= this.endPage; i++) {
                range.push({
                name: i,
                isDisabled: i === this.$store.getters.getCurrentPage
                });
            }

            return range;
        },
        isInFirstPage() {
            return this.$store.getters.getCurrentPage === 1;
        },
        isInLastPage() {
            return this.$store.getters.getCurrentPage === this.$store.getters.getTotalPages;
        },
    },
    methods: {
        onClickFirstPage() {
            this.$store.commit('setCurrentPage', 1);
        },
        onClickPreviousPage() {
            this.$store.commit('setCurrentPage', this.$store.getters.getCurrentPage - 1);
        },
        onClickPage(page) {
            this.$store.commit('setCurrentPage', page);
        },
        onClickNextPage() {
            this.$store.commit('setCurrentPage', this.$store.getters.getCurrentPage + 1);
        },
        onClickLastPage() {
            this.$store.commit('setCurrentPage', this.$store.getters.getTotalPages);
        },
        isPageActive(page) {
            return this.$store.getters.getCurrentPage === page;
    }


    }
  }

</script>

<style>
.pagination {
    list-style-type: none;
    display: flex;
    justify-content: center;
    gap:10px;
}
.active {
  background-color: #4AAE9B;
  color: #ffffff;
}
</style>