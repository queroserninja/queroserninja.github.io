<template>
  <v-speed-dial absolute direction="bottom" right>
    <template v-slot:activator>
      <v-btn icon large>
        <v-icon v-text="'mdi-earth'"/>
      </v-btn>
    </template>
    <v-btn :key="language.lang" @click="setLanguageTo(language.lang)" class="title"
           text v-for="language in languages" v-text="language.emoji"/>
    <v-btn class="title" href="https://github.com/kammradt/queroserninja.github.io" text link target="_blank">
      <v-icon v-text="'mdi-xml'"/>
    </v-btn>
  </v-speed-dial>
</template>
<script>
  export default {
    name: 'Languages',
    data: () => ({
      languages: [
        {emoji: '🇧🇷', lang: 'br'},
        {emoji: '🇺🇸', lang: 'en'},
        {emoji: '🇪🇸', lang: 'es'}
      ]
    }),
    methods: {
      setLanguageTo(language) {
        this.$i18n.locale = language
        document.title = this.$t('title')
      },
    }
  }
</script>
