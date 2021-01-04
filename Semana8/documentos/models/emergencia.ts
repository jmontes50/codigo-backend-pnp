import { Schema } from 'mongoose';

let comentarioSchema = new Schema({
  usu_info:String,
  usu_coment:{
    type:String,
    minlength:20,
    maxlength:240
  }
})

export let emergenciaSchema = new Schema({
  eme_titulo: String,
  eme_desc:String,
  eme_fec:{
    type:String,
    min:'2021-01-01'
  },
  eme_img:{
    type:String,
    default: 'image.jpg'
  },
  eme_lat:Number,
  eme_lng:Number,
  eme_bitacora:[
    comentarioSchema
  ]
}, {timestamps:true})