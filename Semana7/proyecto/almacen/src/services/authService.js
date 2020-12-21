import fire from "../config/firebase";

const db = fire.firestore();

const registro = (email, password) => {
  return new Promise ((resolve, reject) => {
    fire.auth().createUserWithEmailAndPassword(email, password)
    .then(u => {
      // console.log(u)
      return db.collection("usuarios").doc(u.user.uid).set({
        email:email,
        nombres:"",
        apellidos:"",
        edad:0,
        telefono:"",
        foto:""
      })
      .then(() => {
        resolve(u.user.uid)
      })
    })
    .catch(err => reject(err))
  })
}

const obtenerPerfil = (id) => {
  return new Promise((resolve, reject) => {
    db.collection("usuarios").doc(id).get()
    .then(rpta => {
      let miPerfil = rpta.data()
      // console.log({miPerfil})
      resolve(miPerfil)
    })
  })
}

const editarPerfil = (id, perfil) => {
  return db.collection("usuarios").doc(id).update({...perfil})
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

export {registro, ingresar, obtenerPerfil, editarPerfil};