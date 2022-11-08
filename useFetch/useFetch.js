import { useEffect, useState } from "react";


export const useFetch = ( url ) => {
  
  
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    });
  
    const getFetch = async () => {
        
        setState({  //al principio esta cargando los datos, is loading es tru
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url);
        const data = await resp.json();  //recibe los datos de la api 

        //asigna los datos y isLoading es falso
        setState({
            data,
            isLoading: false,
            error: null
        });
        
    }

    useEffect(() => {
    
    getFetch();

    }, [url])
  
    return {
        data:       state.data,
        isLoading:  state.isLoading,
        error:      state.error,
    };


}
