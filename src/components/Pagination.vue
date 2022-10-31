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
    props: {
        items: {
            type: Array,
            default: []
        },
        maxVisibleButtons: {
            type: Number,
            required: false,
            default: 3
        },
        totalPages: {
            type: Number,
            required: true
        },
        perPage: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        }
    },
    computed: { 
        startPage() {
            if (this.currentPage === 1) {
            return 1;
            }

            if (this.currentPage === this.totalPages) {
                if((this.totalPages - this.maxVisibleButtons)>=1){
                    return this.totalPages - this.maxVisibleButtons;
                } else {
                    return 1;
                }
            }

            return this.currentPage - 1;
        },
        endPage() {
            return Math.min(
                this.startPage + this.maxVisibleButtons - 1,
                this.totalPages
            );
        },
        pages() {
            const range = [];

            for (
            let i = this.startPage;
            i <= Math.min(this.startPage + this.maxVisibleButtons - 1, 
            this.totalPages);
            i++) {
                range.push({
                name: i,
                isDisabled: i === this.currentPage
                });
            }

            return range;
        },
        isInFirstPage() {
            return this.currentPage === 1;
        },
        isInLastPage() {
            return this.currentPage === this.totalPages;
        },
    },
    methods: {
        onClickFirstPage() {
            this.$emit('pagechanged', 1);
        },
        onClickPreviousPage() {
            this.$emit('pagechanged', this.currentPage - 1);
        },
        onClickPage(page) {
            this.$emit('pagechanged', page);
        },
        onClickNextPage() {
            this.$emit('pagechanged', this.currentPage + 1);
        },
        onClickLastPage() {
            this.$emit('pagechanged', this.totalPages);
        },
        isPageActive(page) {
            return this.currentPage === page;
    }


    }
  }

</script>

<style>
.pagination {
    list-style-type: none;
    display: flex;
    justify-content: center;
}
.active {
  background-color: #4AAE9B;
  color: #ffffff;
}
</style>