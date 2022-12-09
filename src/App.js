
//import Barra from './components/Barra';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavAdmin from './components/components-Admins/NavAdmin';
import RegistrarProducto from './components/components-Admins/RegistrarProducto';
import VerClientes from "./components/components-Admins/VerClientes";
import VerProductos from "./components/components-Admins/VerProductos";
import FormCliente from "./components/components-cliente/FormCliente";
import Login from "./components/Login";
function App() {
  return (

    <Router>
    {/**  <Barra /> */}
  <NavAdmin/>
<Route path="/" component={Login}/>
  <Route path="/registrarProducto" exact component={RegistrarProducto}/>
  <Route path="/verProductos" exact component={VerProductos}/>
<Route path="/crearCliente" exact component={FormCliente}/>
<Route path="/verClientes" exact component={VerClientes}/>
    </Router>
  );
}

export default App;
