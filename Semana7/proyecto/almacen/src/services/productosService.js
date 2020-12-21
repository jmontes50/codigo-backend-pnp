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

  crearProducto(producto){
    return this.db.collection("productos").add({...producto})
  }

  subirImagen = (imagen, refStorage) => {
    return new Promise ((resolve, reject) => {
      const tarea = refStorage.put(imagen);

      tarea.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          reject(error)
        },
        // La parte interesante, cuando tengo la imagen subida
        () => {
          tarea.snapshot.ref.getDownloadURL()
          .then(urlImagen => {
            resolve(urlImagen)
          })
        }
      )
    })
  }
}