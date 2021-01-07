const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre:{
    type: String,
    required: true
  },
  descripcion:{
    type:String,
    required:true
  },
  precio:{
    type:Number,
    required:true
  },
  is_active: {
    type:Boolean,
    default:true
  }
}, {timestamps: true});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;