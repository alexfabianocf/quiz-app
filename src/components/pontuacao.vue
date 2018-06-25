<template>
  <div class="row gutter-xs">
    <div class="col-xs-12 col-sm-12 col-md-4">
    <p v-if="getPontos > 0">Acertou: {{getPontos}}</p>
    <p v-if="getPontos2 > 0">Errou: {{getPontos2}}</p>
  </div>
  </div>
</template>
<script>
export default {
  computed: {
    getPontos () {
      let v = this.$store.state.questions.questions
      return v.respCorreta
    },
    getPontos2 () {
      let v = this.$store.state.questions.questions
      return v.respErrada
    }
  }
}
</script>
