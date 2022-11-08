import { useState } from "react"

export const useCounter = ( value  = 10 ) => {
  
    const [counter, setCounter] = useState( value );
    const min = 1;

    const increment = (val  = 1) => {
        setCounter( (current) => current + val);
    }

    const decrement = (val = 1 ) => {
        
        counter > min && setCounter((current) => current - val);
    }

    const reset = () => {
        setCounter( value );
    }

    return {
        counter,
        increment,
        decrement, 
        reset
    };

}
