export const addPergunta = (contexto, pergunta) => {
  contexto.commit('ADD_PERGUNTA', pergunta)
}
export const setPergunta = (contexto, pergunta) => {
  contexto.commit('SET_PERGUNTA', pergunta)
}
