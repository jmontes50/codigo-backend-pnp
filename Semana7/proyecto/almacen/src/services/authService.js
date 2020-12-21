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

export {registro};