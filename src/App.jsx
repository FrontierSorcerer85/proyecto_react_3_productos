import { Component } from 'react'
import axios from 'axios';
import './App.css'

export default class App extends Component {
  constructor(props) {
    super (props);
    this.state = {
      categorias: []
    }

  }

  render () {
    return (
    <div>
      <span> App </span>
      <input type="button" value="buscar" onClick={()=>this.buscarCategorias()}/>
    </div>
    )
  }

buscarCategorias () {
  const url ="https://productos.ctpoba.edu.ar/api/categorias"
  axios.get(url)
  .then((resp) => {
    this.setState ({categorias: resp.data.categorias})
  })
  .catch((error) => {
    console.log(error);
  })
}

}

<select
  value = {this.state.categoria_id}
    onCharge = {(e) => this.setState({cat.id: e.t.value})}
>
  {this.state.categorias.map ((categoria,i)=> 
  <option key={cat.id} value = {cat.id}> {cat.nombre} </option>
  )}
</select> //mapear todo el atributo de categorias para crear opciones por cada vez que la API.. 

