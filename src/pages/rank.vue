<template>
  <div>
    <q-layout>
      <q-layout-header>
        <q-toolbar color="secondary">
          <q-toolbar-title>
            Rank Geral
          </q-toolbar-title>
          <router-link :to="{name: 'home'}" style="font-size: 29px; color: #fff; text-decoration: none;"><q-icon name="highlight_off" /></router-link>
        </q-toolbar>
      </q-layout-header>
    <q-page-container>
      <q-page padding >
      </q-page>
    </q-page-container>
    </q-layout>
  </div>
</template>
<script>
export default {
  name: 'LayoutDefault',
  data () {
    return {
      list: '',
      lista: ['sss', 'ssss'],
      questions: [
        {
          text: '~assets/quasar-logo-full.svg',
          responses: [
            {text: 'Wrong, too bad.', correct: false},
            {text: 'Right!', correct: true}
          ]
        },
        {
          text: '~assets/quasar-logo-full.svg',
          responses: [
            {text: 'Wrong, too bad.', correct: false},
            {text: 'Right!', correct: true}
          ]
        }
      ]
    }
  },
  methods: {
    clicado: function () {
      if (this.escolheu === true) { }
      this.escolheu = true
    }
  }
}
</script>

<style>
</style>
