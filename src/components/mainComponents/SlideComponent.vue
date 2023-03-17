<template>
  <v-carousel cycle hide-delimiter-background :show-arrows="false">
    <v-carousel-item
        :src="$urlBase + '/img/slide/desk-home.webp'"
        cover
    ></v-carousel-item>
    <v-carousel-item
        :src="$urlBase + '/img/slide/desk-home-50.webp'"
        cover
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "SlideComponent"
}
</script>

<style scoped>

</style>