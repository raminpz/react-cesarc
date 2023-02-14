

function App() {

  const edad = 11;
  let numero = 12;
  let paises = [
    {
      nombre: "Argentina",
      dominio: "ar"
    },
    {
      nombre: "Chile",
      dominio: "cl"
    },
    {
      nombre: "Colombia",
      dominio: "colo"
    },
    {
      nombre: "Venezuela",
      dominio: "ve"
    },
    {
      nombre: "Brazil",
      dominio: "br"
    }

  ];
  return (
    <>
      <h3>Renderizado condicional</h3>
      {(edad >= 18) ? (
        <>La persona es mayor de edad</>
      ) : (
        <>La persona es menor de edad</>
      )}
      <h1>Renderizado switch case</h1>
      {(() => {
        switch (numero) {
          case 1:
            return <h2>Primer numero</h2>
          case 12:
            return <h2>El numero es 12</h2>
          case 3:
            return <h2>Tercero numero</h2>
          default:
            return <h1>Numero no encontrado</h1>
        }
      })()}
      <hr />
      <h1>Ejemplos de Loop</h1>

      <h3>Loop normal con ES6</h3>
      <ul>
        {[...Array(11)].map((x, i) => (
          <li key={i}>{i}</li>
        )
        )}
      </ul>

      <h3>Inline IIFE</h3>
      <ul>
        {(function (rows, i, len) {
          while (++i <= len) {
            rows.push(<li key={i}>{i}</li>)
          }
          return rows;
        })([], 0, 10)}
      </ul>

      <h3>Con ES2015 syntax y Array methods</h3>
      {Array(11).fill(1).map((el, i) =>
        <li key={i}>{i}</li>)}

      <h3>Ciclo for sencillo</h3>
      {(() => {
        let rows = [];
        for (let i = 0; i <= 10; i++) {
          rows.push(<li key={i}>{i}</li>)
        }
        return rows;
      })
        ()}

      <hr/>
      <h1>Recorrer elementos con map</h1>
      <ul>
        {paises.map((pais, i)=>(
          <li key={pais.dominio}>
            {i}-{pais.nombre}(El dominio es: {pais.dominio})
          </li>
        ))}
      </ul>


    </>
  )
}

export default App
