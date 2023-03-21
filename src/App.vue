<template>
  <v-app>
    <v-app-bar  elevation="14"  height="50px">
      <v-btn icon color="blue lighten-2" to="/">
        <v-icon large color="green darken-2">home</v-icon>
      </v-btn>  
      <v-toolbar-title>My personal costs</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items  >
        <v-btn color="green darken-2" text to="/">Home</v-btn>   
        <v-btn color="green darken-2" text to="/about">About</v-btn>
      </v-toolbar-items>
    </v-app-bar>  

    <v-main>
      <v-container>
        <v-row>
          <v-container>
            <router-view></router-view>
          </v-container>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
