import fire from "../config/firebase";

const registro = (email, password) => {
  return new Promise ((resolve, reject) => {
    fire.auth().createUserWithEmailAndPassword(email, password)
    .then(u => {
      // console.log(u)
      resolve(u.user.uid)
    })
    .catch(err => reject(err))
  })
}

const ingresar = (email, password) => {
  return new Promise ((resolve, reject) => {
    fire.auth().signInWithEmailAndPassword(email, password)
    .then(u => {
      resolve(u.user)
    })
    .catch(error => {
      reject(`Error al loguear ${error}`)
    })
  })
}

export {registro, ingresar};