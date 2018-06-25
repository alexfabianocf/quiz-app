<template>
  <div>
    <q-layout>
      <q-layout-header>
        <q-toolbar color="secondary">
          <q-toolbar-title>
            Quiz
          </q-toolbar-title>
          <router-link :to="{name: 'home'}" style="font-size: 29px; color: #fff; text-decoration: none;"><q-icon name="highlight_off" /></router-link>
        </q-toolbar>
      </q-layout-header>
    <q-page-container>
      <q-page padding >
        <m-pergunta></m-pergunta>
        <hr style="margin:25px 0 15px 0;">
          <pontuacao></pontuacao>
      </q-page>
    </q-page-container>
    </q-layout>
  </div>
</template>
<script>
import mPergunta from '../components/pergunta'
import pontuacao from '../components/pontuacao'
export default {
  name: 'indexPergunta',
  components: {mPergunta, pontuacao}
}
</script>

<style>
</style>
