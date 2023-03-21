<template>
    <v-container>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                &#8470;
              </th>
              <th class="text-left">
                Date
              </th>
              <th class="text-left">
                Category
              </th>
              <th class="text-left">
                Value
              </th>
              <th class="text-left">
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in paymentsList" 
              :key="item.id"
            >
              <td>{{ item.id }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.type }}</td>
              <td>{{ item.amount }}</td>
              <td>
                <v-btn block text
                    @click="callContextMenu($event, item)"
                    >
                    <v-icon>more_vert</v-icon>
                </v-btn>
                
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>        
      <ContextMenu></ContextMenu>
    </v-container>
</template>

<script>
import ContextMenu from './ContextMenu.vue';

export default {
    name: "PaymentsDisplay",
    data () {
      return {
      
      }
    },
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
