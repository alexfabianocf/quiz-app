import storage from 'localforage'

export function addPergunta (pergunta) {
  storage.clear()
  storage.setItem(pergunta.id, pergunta)
}
export function getPer () {
  let list = []
  storage.keys().then(keys => {
    keys.forEach(key => {
      storage.getItem(key).then(value => list.push(value))
    })
  })

  return list
}
