import { Component } from 'react'
import axios from 'axios';
import './App.css'

export default class App extends Component {
  constructor(props) {
    super (props);
    this.state = {
      categoria_id:"",
      categorias: [],
      productos: []
    }

  }

  buscarCategorias () {
  // const url ="https://productos.ctpoba.edu.ar/api/categorias"
  const url ="http://10.0.4.103:3000/api/categorias"
  axios.get(url)
  .then((resp) => {
    this.setState ({categorias: resp.data.categorias})
  })
  .catch((error) => {
    console.log(error);
  })
}
buscarProductos (categoria_id) {
  const url ="http://10.0.4.103:3000/api/productos"
  const config = {
    params: {categoria_id}
  }
  axios.get (url, config)
  .then((resp) => {
    console.log(resp.data.productos);
    this.setState ({productos: resp.data.productos})
  })
  .catch((error) => {

  } )
}

render () {
  return (
    <div>
      <span> App </span>
      <input 
      type="button" 
      value="buscar categorias" 
      onClick={()=>this.buscarCategorias()}
      />
    <select
      value = {this.state.categoria_id}
      onCharge = {(e) => this.setState({categoria_id: e.target.value})}
    >
  {this.state.categorias.map ((cat,i)=> 
  <option value={cat.id}> {cat.nombre} </option>
  )}
  </select> 
    <h3>{this.state.categoria_id}</h3>
    {this.state.productos.map((prod, i) =>
    <span key = {prod.id}> {prod.nombre} </span>
    )}
</div>
  )  
}
}