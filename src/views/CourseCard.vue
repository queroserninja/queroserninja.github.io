<template>
  <v-card class="mx-auto" :color="language">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline white--text">
          <span v-text="courseName"/>
          <span class="font-weight-bold">Ninja</span>
        </v-list-item-title>
        <v-list-item-subtitle class="black--text" v-text="`${$t('by')} Fernando Daciuk`"/>
      </v-list-item-content>
    </v-list-item>

    <v-img :src="imageSrc"/>

    <v-card-text class="title black--text" v-text="$t(`${language}.text`)"/>

    <v-card-actions>
      <v-btn  link target="_blank" :href="link"
              tile block large :color="btnColor" class="white--text display-1"
              v-text="$t('coupon')" />
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    name: 'CourseCard',
    props: {
      language: String,
      courseName: String,
      image: String,
      link: String
    },
    data() {
      return {
        imageSrc: require(`@/assets/${this.image}`)
      }
    },
    computed: {
      btnColor() {
        let btnColors = {
          javascript: '#323230',
          git: '#800000',
          react: '#18BCEE'
        }
        return btnColors[this.language]
      }
    }
  }
</script>
