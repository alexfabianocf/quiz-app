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
        <div class="row" style="justify-content: center; margin-bottom: 15px;">
          <img alt="Pergunta" :src="questions.titulo" class="responsive">
        </div>
        <div class="row gutter-xs" >
          <div class="col-xs-12 col-sm-12 col-md-4">
            <q-item tag="label">
              <q-item-side>
                <q-radio :disable="mostrarResultado" color="secondary" v-model="list" :val="1"/>
              </q-item-side>
              <q-item-main>
                <q-item-tile label>{{questions.alt1}}</q-item-tile>
              </q-item-main>
            </q-item>
          </div>
        </div>
        <div class="row gutter-xs" >
          <div class="col-xs-12 col-sm-12 col-md-4">
            <q-item tag="label">
              <q-item-side>
                <q-radio :disable="mostrarResultado" color="secondary" v-model="list" :val="2" />
              </q-item-side>
              <q-item-main>
                <q-item-tile label>{{questions.alt2}}</q-item-tile>
              </q-item-main>
            </q-item>
          </div>
        </div>
        <div class="row gutter-xs" >
          <div class="col-xs-12 col-sm-12 col-md-4">
            <q-item tag="label">
              <q-item-side>
                <q-radio :disable="mostrarResultado" color="secondary" v-model="list" :val="3"/>
              </q-item-side>
              <q-item-main>
                <q-item-tile label>{{questions.alt3}}</q-item-tile>
              </q-item-main>
            </q-item>
          </div>
        </div>
        <div class="row gutter-xs" >
          <div class="col-xs-12 col-sm-12 col-md-4">
            <q-item tag="label">
              <q-item-side>
                <q-radio :disable="mostrarResultado" color="secondary" v-model="list" :val="4"/>
              </q-item-side>
              <q-item-main>
                <q-item-tile label>{{questions.alt4}}</q-item-tile>
              </q-item-main>
            </q-item>
          </div>
        </div>
        <div class="row gutter-xs" v-show="mostrarResultado" >
          <div class="col-xs-12 col-sm-12 col-md-4">
            <q-item tag="label">
              <q-btn class="full-width" color="negative" :label="'Resposta: '+questions.resp" />
            </q-item>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4">
            <q-item tag="label">
              <q-btn  outline color="teal" class="full-width" label="Proxima" @click="errorProxima" />
            </q-item>
          </div>
        </div>
        <div v-if="list != '' && mostrarResultado == false" class="col-xs-12 col-sm-12 col-md-4">
          <q-btn  outline color="teal" class="full-width" label="Comfirma" @click="verificarResposta" style="margin-top:20px;"/>
        </div>
      </q-page>
    </q-page-container>
    </q-layout>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'LayoutDefault',
  data () {
    return {
      list: '',
      mostrarResultado: false,
      questions: {
        titulo: '',
        alt1: '',
        alt2: '',
        alt3: '',
        alt4: '',
        resp: '',
        acertou: false
      }
    }
  },
  methods: {
    verificarResposta: function () {
      this.$store.dispatch('questions/addPergunta', this.questions)
      this.resultado()
    },
    gerarPergunta: function () {
      axios.get('http://127.0.0.1:8000/api/perguntas').then(response => {
        this.questions.titulo = response.data[0].imagem
        this.questions.alt1 = response.data[0].alternativa1
        this.questions.alt2 = response.data[0].alternativa2
        this.questions.alt3 = response.data[0].alternativa3
        this.questions.alt4 = response.data[0].alternativa4
        this.questions.resp = response.data[0].resposta
      })
    },
    errorProxima: function () {
      this.reset()
      this.questions.acertou = false
      this.mostrarResultado = false
      this.gerarPergunta()
    },
    resultado: function () {
      if (this.questions.resp.toString() === this.list.toString()) {
        this.questions.acertou = true
        this.reset()
        this.gerarPergunta()
      } else {
        this.mostrarResultado = true
      }
    },
    reset: function () {
      this.list = ''
      this.questions.titulo = ''
      this.questions.alt1 = ''
      this.questions.alt2 = ''
      this.questions.alt3 = ''
      this.questions.alt4 = ''
      this.questions.resp = ''
    }
  }
}
</script>

<style>
</style>
