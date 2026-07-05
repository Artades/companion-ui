import "./App.css";
import { Input } from "../components/Input";

function App() {
  return (
    <main className="app">
      <section className="app__demo">
        <Input label="Имя" placeholder="Введите имя" />
      </section>
    </main>
  );
}

export default App;
