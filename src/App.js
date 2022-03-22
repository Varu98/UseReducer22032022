import { CartItems } from "./CartItems";
import "./styles.css";

export default function App() {
  const numList = [
    { type: "odd", payload: 1 },
    { type: "odd", payload: 3 },
    { type: "odd", payload: 55 },
    { type: "even", payload: 22 },
    { type: "even", payload: 44 }
  ];

  return (
    <div className="App AppDoo">
      <CartItems />
    </div>
  );
}
