import Pais from "./Pais"

const ComponenteFuncional2 = ({prop1, nombre, paises}) => {
  return (
    <>
        <h3>Contenido desde el componente 2</h3>
        <ul>
            <li>Prop1: {prop1}</li>
            <li>Nombre: {nombre}</li>
            <li>
                <ul>
                    {paises.map((pais)=>(
                        <li key={pais.id}>{pais.nombre}</li>
                    ))}
                </ul>
            </li>
        </ul>
        <hr/>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Dominio</th>
                </tr>
            </thead>
            <tbody>
                {paises.map((pais)=> (
                    <Pais key={pais.id} pais={pais}/>
                ))}
            </tbody>
        </table>

    </>
  )
}

export default ComponenteFuncional2