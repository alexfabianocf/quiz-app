<template>
  <div padding >
    <div class="row" style="justify-content: center; margin-bottom: 9px; margin-top: 30px;">
      <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" class="responsive">
    </div>
    <div class="row " style="justify-content: center; margin-top: 65px;">
      <div style="margin-right:15px;">
          <router-link :to="{name: 'indexpergunta'}">
      <q-btn
        round
        dense
        color="primary"
        size="lg"
        icon="play_arrow"
      />
      </router-link>
      </div>
      <div style="margin-right:15px;">
          <router-link :to="{name: 'rank'}">
      <q-btn
        round
        dense
        color="primary"
        size="lg"
        icon="person"
      />
      </router-link>
      </div>
      <div class="">
          <router-link :to="{name: 'equipe'}">
      <q-btn
        round
        dense
        color="primary"
        size="lg"
        icon="phone_android"
      />
      </router-link>
      </div>
   </div>
  </div>
</template>
<style>
</style>

<script>
import { getPer } from '../persistencia'
export default {
  name: 'PageIndex',
  mounted () {
    const per = getPer()
    this.$store.dispatch('questions/setPergunta', per)
  },
  methods: {
    notify (icon) {
      this.$q.notify({
        icon,
        message: 'So you want your ' + icon + 's, huh?'
      })
    }
  }
}

</script>
