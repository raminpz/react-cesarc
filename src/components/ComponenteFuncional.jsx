import ComponenteFuncional2 from "./ComponenteFuncional2"

const ComponenteFuncional = () => {
  let nombre = "Ramiro Nuñez";
  let edad = 35;
  let paises = [
    {
      id: 1,
      nombre: "Argentina",
      dominio: "ar"
    },
    {
      id: 2,
      nombre: "Chile",
      dominio: "cl"
    },
    {
      id: 3,
      nombre: "Colombia",
      dominio: "colo"
    },
    {
      id: 4,
      nombre: "Venezuela",
      dominio: "ve"
    },
    {
      id: 5,
      nombre: "Brazil",
      dominio: "br"
    }

  ];
  return (
    <>
        <h1>Hola desde componente funcional</h1>
        <ComponenteFuncional2 prop1="manzana" nombre={nombre} paises={paises}/>
    </>
  )
}

export default ComponenteFuncional