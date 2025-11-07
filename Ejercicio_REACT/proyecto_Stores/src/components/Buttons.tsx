import { useStore } from "../stores/store";

export default function Buttons() {
    const { count, setCount } = useStore();
    return (
        <div>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}