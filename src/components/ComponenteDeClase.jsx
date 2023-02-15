import React from "react";

export default class ComponenteDeClase extends React.Component 
{
    constructor(props) {
        console.log("El componente aun no esta montado");
        super();
        this.state = {
            contador: 0,
            nombre: 'Ramiro'
        }
    }
    componentDidMount(){
        console.log("El componente ya se encuentra en el DOM");
    }
    componentWillUnmount(){
        console.log("El componente ha sido eliminado del DOM");
    }
    componentDidUpdate(prePros, prevState){
        console.log("El estado o las props del componente han cambiado");
    }
    render() {
        console.log("El componente se dibuja en el dom");
        return (
            <div>
                <h1>Hola desde componente de clase</h1>
                <p>Contador = {this.state.contador}</p>
            </div>
        );
    }
}