import { useState } from 'react'
import '../styles/app.css'

const DEFAULT_COUNT = 0;

const Counter = () => {
    const [count, setCount] = useState(DEFAULT_COUNT);
    
    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => {
        if (count >  DEFAULT_COUNT) {
             setCount(count - 1);
        }
    };
    const handleReset = () => setCount(DEFAULT_COUNT);
    

  return (
<div>
    <p>Contador: {count} </p>
    <button onClick={handleIncrement}>Añadir</button>
    <button onClick={handleDecrement}>Reducir</button>
    <button onClick={handleReset}>Resetear</button>
</div>
  )
}

export default Counter