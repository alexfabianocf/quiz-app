<template>
  <div>
    <div class="row" style="justify-content: center; margin-bottom: 15px;">
        <img alt="Pergunta" :src="question.titulo" class="responsive">
    </div>
    <div class="row gutter-xs" >
        <div class="col-xs-12 col-sm-12 col-md-4">
            <q-item tag="label">
                <q-item-side>
                <q-radio :disable="mostrarResultado" color="secondary" v-model="list" :val="1"/>
                </q-item-side>
                <q-item-main>
                <q-item-tile label>{{question.alt1}}</q-item-tile>
                </q-item-main>
            </q-item>
        </div>
    </div>
    <div class="row gutter-xs" >
        <div class="col-xs-12 col-sm-12 col-md-4">
            <q-item tag="label">
                <q-item-side>
                <q-radio :disable="mostrarResultado" color="secondary" v-model="list" :val="2"/>
                </q-item-side>
                <q-item-main>
                <q-item-tile label>{{question.alt2}}</q-item-tile>
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
                <q-item-tile label>{{question.alt3}}</q-item-tile>
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
                <q-item-tile label>{{question.alt4}}</q-item-tile>
                </q-item-main>
            </q-item>
        </div>
    </div>
    <div v-if="list != '' && mostrarResultado == false" class="col-xs-12 col-sm-12 col-md-4">
        <q-btn  outline color="teal" class="full-width" label="Comfirma" @click="verificarResposta" style="margin-top:20px;"/>
    </div>
    <div v-if="mostrarResultado" class="col-xs-12 col-sm-12 col-md-4">
        <q-btn  outline color="teal" class="full-width" :label="textoResultado" style="margin-top:20px;"/>
        <q-btn  outline color="teal" class="full-width" label="Proxima" @click="proxima" style="margin-top:20px;"/>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { uid } from 'quasar'
export default {
  data () {
    return {
      list: '',
      mostrarResultado: false,
      textoResultado: '',
      respostaErrada: '',
      respostacerta: '',
      question: {
        id: '',
        titulo: '',
        alt1: '',
        alt2: '',
        alt3: '',
        alt4: '',
        resp: '',
        acertou: false,
        respCorreta: 0,
        respErrada: 0
      }
    }
  },
  mounted () {
    const p = this.$store.state.questions.questions
    if (p.length > 0) {
      this.question.titulo = p[0].titulo
      this.question.alt1 = p[0].alt1
      this.question.alt2 = p[0].alt2
      this.question.alt3 = p[0].alt3
      this.question.alt4 = p[0].alt4
      this.question.resp = p[0].resp
      this.question.respCorreta = p[0].respCorreta
      this.question.respErrada = p[0].respErrada
    } else {
      this.gerarPergunta()
    }
  },
  methods: {
    gerarPergunta: function () {
      axios.get('http://uemaquiz.tk/api/perguntas').then(response => {
        this.question.titulo = response.data[0].imagem
        this.question.alt1 = response.data[0].alternativa1
        this.question.alt2 = response.data[0].alternativa2
        this.question.alt3 = response.data[0].alternativa3
        this.question.alt4 = response.data[0].alternativa4
        this.question.resp = response.data[0].resposta
      })
    },
    verificarResposta: function () {
      this.resultado()
    },
    resultado: function () {
      if (this.question.resp.toString() === this.list.toString()) {
        this.question.acertou = true
        let c = this.question.respCorreta + 1
        this.question.respCorreta = c
        this.textoResultado = 'Parabéns'
      } else {
        this.question.respErrada = this.question.respErrada + 1
        this.textoResultado = 'Errou! Resposta: ' + this.question.resp
      }
      this.mostrarResultado = true
    },
    reset: function () {
      this.list = ''
      this.question.titulo = ''
      this.question.alt1 = ''
      this.question.alt2 = ''
      this.question.alt3 = ''
      this.question.alt4 = ''
      this.question.resp = ''
      this.mostrarResultado = false
    },
    proxima: function () {
      const cloned = JSON.parse(JSON.stringify(this.question))
      cloned.id = uid()
      this.$store.dispatch('questions/addPergunta', cloned)
      this.reset()
      this.gerarPergunta()
    }
  }
}
</script>
