import React from "react";

export default class ComponenteDeClase extends React.Component 
{
    constructor(props) {
        super();
        this.state = {
            contador: 0,
            nombre: 'Ramiro'
        }
    }
    render() {
        return (
            <div>
                <h1>Hola desde componente de clase</h1>
                <p>Contador = {this.state.contador}</p>
            </div>
        );
    }
}