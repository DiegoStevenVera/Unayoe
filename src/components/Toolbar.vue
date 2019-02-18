<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <router-link to="/">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        
        <router-link to="/perfil">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>perm_contact_calendar</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Mi perfil</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>  
        </router-link>
        
        <router-link to="/">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>pets</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Evaluaciones Psicologicas</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>  
        </router-link>

        <router-link to="/evaluacionesRealizadas">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>pets</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Evaluaciones realizadas</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>  
        </router-link>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <router-link to="/">
        <v-toolbar-title class="white--text">Title</v-toolbar-title>
      </router-link>
    </v-toolbar>
  </div>
  
<!--
  <v-toolbar color='indigo' dark>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <router-link to="/">
      <v-toolbar-title class="white--text">Title</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <v-btn flat>Something</v-btn>
      <router-link to="/contact">
        <v-btn flat>Contact</v-btn>
      </router-link>
      <router-link to="/login">
        <v-btn flat>Login</v-btn>
      </router-link>
    </div>

    <div class="hidden-md-and-up">
      <v-layout
        wrap
        style="height: 200px;"
      >
        <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
          height="400px"
        >
          <v-list class="pa-1">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="https://randomuser.me/api/portraits/men/85.jpg">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>John Leider</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>

          <v-list class="pt-0" dense>
            <v-divider></v-divider>

            <v-list-tile
              v-for="item in items"
              :key="item.title"
            >
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
      </v-layout>
    </div>
  </v-toolbar>
  -->
</template>

  
<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>