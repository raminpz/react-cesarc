import Basicos from "./components/Basicos";
import ComponenteDeClase from "./components/ComponenteDeClase";

function App() {
    return (
        <>
        {/** Esto (Basicos es un componente que le inyectamos desde otro componente) */}
            <ComponenteDeClase/>
        </>
    );
  
}

export default App
