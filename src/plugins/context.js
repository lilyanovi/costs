export default {
    install(Vue) {
      Vue.prototype.$context = {
        EventEmitter: new Vue(),
        //costId прокинули из List.vue
        show(element, item) {
  
        //  console.log(element.getBoundingClientRect());
          const widthContextMenu = 100;
          const {x,y, height} = element.getBoundingClientRect(); // функция для определения координат
          this.EventEmitter.$emit("showContextMenu", {x: x - widthContextMenu, y: y + height, item}); // прокидываем координаты трех точек
  
        },
        hide(item) {
          this.EventEmitter.$emit("hideContextMenu", {item}); // передаем вторым параметром ОБЪЕКТ
        },
      };
    },
  };