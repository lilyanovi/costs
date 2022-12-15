<template>
    <div class="wrapper">
        <div class="costs_title">
          <p>&#8470;</p>
          <p>Date</p>
          <p>Category</p>
          <p>Value</p>
          <p></p>
        </div>
        <div class="costs_table" v-for="item of paymentsList" v-bind:key="item.id">
          <p>{{ item.id }}</p>
          <p>{{ item.date }}</p>
          <p>{{ item.type }}</p>
          <p>{{ item.amount }}</p>
          
          <button class="payments_menu" @click="callContextMenu($event, item)">
            <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-three-dots-vertical" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>
          </button>
          
            <ContextMenu></ContextMenu>
          
        </div>       
    </div>
</template>

<script>
import ContextMenu from './ContextMenu.vue';

export default {
    name: "PaymentsDisplay",
    mounted() {
        this.$store.dispatch("fetchData", +this.$route.query.page);
        this.$context.EventEmitter.$on("show", this.show);
    },
    computed: {
        paymentsList() {
            return this.$store.getters.getPaginatedData;
        }
    },
    methods: {
    //costId = @click="callContextMenu(cost.id)
      callContextMenu(event, item) {
        this.$context.show(event.currentTarget, item); // event.currentTarget для определения текущего элемента, на котором сработал event
      }
    },
    components: { 
      ContextMenu
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;

}
.costs_title, .costs_table {
    display: grid;
    grid-template-columns: 50px repeat(3, 1fr) 50px;
    border-bottom: 1px solid grey;
}
.costs_title {
    font-weight: bold;
}
.payments_menu  {
  border: none;
  background-color: transparent;
  fill:currentColor;
  position: relative;
}
.payments_menu:hover{
  fill: green;
}
.payments_menu:active{
  fill: currentColor;
}

</style>