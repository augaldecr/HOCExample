// import { Component } from 'react'

// // const aHoc = (Component) => {
// //   return newComponent
// // }

// const AHoc = (OriginalComponent) => {
//   return class extends Component{
//     render(){
//       return(
//         <OriginalComponent name="María" />
//       )
//     }
//   }
// }

// const App = (props) => {
//   return (
//     <div className="container">
//        <h1>HOC (High Order Component pattern)</h1>
//        <p>Un higher-order component es una función que toma un componente y devuelve uno nuevo </p>
//        <p>HOCs son muy utilizados en librerías de terceros como Redu'x (connect), Relay's, etc.</p> 
//        {
//          props && <p>{props.name}</p>
//        }   
//     </div>
//   )
// }

// //export default App
// export default AHoc(App)
/***********************************************************/

// HOC con opciones de configuración
// Tenemos 2 opciones para esto
//Opción A: Pasar un objeto de configuración como parámetro
//Opción B: Crear una segunda ejecución

// import { Component } from 'react'

// // Opción A
// // const withCounter = (OriginalComponent, config) => {
// //   return class extends Component{

// // Opción B
// const withCounter = (OriginalComponent) => {
//   return (config) => class extends Component{
//     state = {
//       // numero: 0
//       numero : config.initialNumber
//     }

//     add = () => this.setState( state => ({
//                                 numero : this.state.numero + 1
//                               }))

//     render(){
//       return(
//         <OriginalComponent 
//           name="María" 
//           numero={this.state.numero}
//           add={this.add}
//         />
//       )
//     }
//   }
// }

// const App = (props) => {
//   return (
//     <div className="container">
//        <h1>HOC (High Order Component pattern)</h1>
//        <p>Un higher-order component es una función que toma un componente y devuelve uno nuevo </p>
//        <p>HOCs son muy utilizados en librerías de terceros como Redu'x (connect), Relay's, etc.</p> 
//        {
//          props.numero && (
//                     <>
//                       <p>{props.name}</p>
//                       <button className='btn btn-primary' onClick={props.add} >
//                         {props.numero}
//                       </button>
//                     </>
//          )         
//        }   
//     </div>
//   )
// }

// // Opción A
// //export default withCounter(App, { initialNumber : 20 })

// // Opción B
// export default withCounter(App)({ initialNumber : 50 })
// //export default App
/*******************************************************************************************/

import React, { Component } from 'react'

const withSize = (OriginalComponent) => class extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  componentDidMount(){
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  render(){
    return(
      <OriginalComponent width={this.state.width} height={this.state.height} />
    )
  }
}

const App = (props) => {
  return (
    <div className='container'>
      <h1>Ejemplo de HOC</h1>
      <hr />
      {
        props.width && <p>Width: {props.width} | Height: {props.height}</p>
      }
    </div>
  )
}

//export default App
export default withSize(App)