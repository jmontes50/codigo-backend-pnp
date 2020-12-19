import fire from "../config/firebase";

export default class ProductosService{
  constructor() {
    this.db = fire.firestore();
  }

  obtenerProductos(){
    return new Promise((resolve, reject) => {
      let consulta = this.db.collection("productos");
      consulta.onSnapshot((snap) => {
        let productos = snap.docs.map(prod => prod.data())
        resolve(productos)
      })
    })
  }
}