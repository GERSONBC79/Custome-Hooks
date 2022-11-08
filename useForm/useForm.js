import { useState } from "react";


export const useForm = ( initialForm = {} ) => {
  

    const [fromState, setFromState] = useState(initialForm);
   
    const onInput = ( {target} ) => { //agrega el valor (value) del input con el nombre name 
        const {name, value } = target;
        //console.log({name, value });
        setFromState({
            ...fromState, 
            [name]: value
        });
    }

    const onResetForm = () => {
        
        setFromState(initialForm);
        
       // console.log("llamado a limpiar");
    }
    
    return{
        ...fromState, //desesctructura las props como username, email, etc..
        fromState,
        onInput,
        onResetForm



    }



}
