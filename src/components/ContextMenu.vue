<template>
<Transition name="fade">
    <div class="form" v-if="isShown" :style="{top: y + 'px', left: x + 'px'}">
      <div class="link link-close" @click="onCloseClick">x</div>
      <span class="link" @click="onEditClick" >&#128393;  Редактировать</span>
      <span class="link" @click="removeCosts">&#128722;  Удалить</span>
    </div>
</Transition>
  </template>
  
  <script>
  export default {
    name: "ContextMenu",
    data() {
      return {
        isShown: false,
        item: undefined,
        x: undefined,
        y: undefined
      };
    },
    methods: {
      show({x, y, item}) {
        this.isShown = true;
        this.item = item;
        this.x = x;
        this.y = y
      },
      hide() {
        this.isShown = false;
      },
      onCloseClick() {
        this.$context.hide();
      },
      onEditClick(){
       
        this.$router.push(`/edit/payment/${this.item.type}?value=${this.item.amount}&date=${this.item.date}`)
        this.$context.hide();
      },
      removeCosts() {
//        console.log(this.item)
        if (this.item !== undefined) {
          this.$store.commit("removeCostsList", this.item)
        }
        this.$context.hide();
      },
    },
    mounted() {
      this.$context.EventEmitter.$on("showContextMenu", this.show);
      this.$context.EventEmitter.$on("hideContextMenu", this.hide);
    },
    computed: {
      isPopupActive() {
        return this.$store.getters.getShowForm;
      },
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
  .form {
    border: 1px solid green;
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    position: absolute;
   }
   .form::before, .form::after {
    content: ''; 
    position: absolute;
    left: 115px; 
    top: -20px;
    border: 10px solid transparent;
    border-bottom: 10px solid green;
   }
   .form::after {
    border-bottom: 10px solid white;
    bottom: -24px; 
   }
  .error {
    border-bottom: 1px solid red;
  }
  .link:hover {
    color: green;
  }
  .link:active {
    color: black;
  }
  .link-close {
    font-weight: bold;
    align-self: flex-end;
  }
  .btn {
    margin-top: 20px;
    margin-left: 55%;
    background-color: cadetblue;
    border: 1px solid cadetblue;
    border-radius: 3px;
    color: white;
    padding: 7px 25px;
    display: inline-block;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color: transparent;
      color: cadetblue;
    }
  }
.fade-enter-active,.fade-leave-active{ 
  transition:opacity .5s; 
} 
.fade-enter,.fade-leave-to{ 
  opacity:0;
}
  </style>