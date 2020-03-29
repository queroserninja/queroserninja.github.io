<template>
  <v-app>
    <v-app-bar app color="background">

      <v-tooltip right>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" large class="icon">
            <v-icon v-text="'mdi-ninja'"/>
          </v-btn>
        </template>
        <span v-text="$t('title')" />
      </v-tooltip>

      <v-spacer></v-spacer>

      <Languages/>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import Languages from "./components/Languages";

  export default {
    name: 'App',
    components: {Languages},
    created() {
      document.title = this.$t('title')
    }
  };
</script>

<style>
  .icon:hover {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }
</style>
