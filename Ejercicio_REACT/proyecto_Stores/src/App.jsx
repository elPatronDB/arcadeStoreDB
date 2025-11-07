import { StoreProvider } from "./stores/store";
import Counter from "./components/Counter";
import Buttons from "./components/Buttons";

export default function App() {
  return (
    <StoreProvider>
      <h2>Contador con Stores REACT PURO</h2>
      <Counter />
      <Buttons />
    </StoreProvider>
  );
}