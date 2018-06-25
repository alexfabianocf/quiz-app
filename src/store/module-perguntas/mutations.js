import { addPergunta } from '../../persistencia'
export const ADD_PERGUNTA = (state, pergunta) => {
  addPergunta(pergunta)
  state.questions = pergunta
}
export const SET_PERGUNTA = (state, pergunta) => {
  state.questions = pergunta
}
