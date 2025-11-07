import { useStore } from "../stores/store";

export default function Counter() {
    const { count, setCount } = useStore();
    return <p>Contador: {count}</p>;
}



