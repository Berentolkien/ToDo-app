import ToDo from "./components/toDo/ToDo";
import Home from "./Pages/Home";


function App() {
  // app seria el layout general que podría incluir la navbar, footer, etc. y maneja las rutas publicas
  // falta agregarle el outlet cuando se hagan estos ajustes
  // se debe mover ToDo al layout privado cuando se haga el login
  return (
    <main className="bg-gradient-to-r from-primary to-secondary">
      <Home />
      <section>
        <ToDo />
      </section>
    </main>
  )
}

export default App;