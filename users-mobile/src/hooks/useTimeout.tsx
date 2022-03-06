import { useEffect, useState } from "react";

/**
 * Este es un CustomHook que que al transcurrir el tiempo se ejecuta una funcion
 * @param time este valor es el tiempo que se le da al transcurrir se ejecuta una funcion
 * @param functionFinish 
 * @returns regresa una variable en la cual indica si ya termino el tiempo transcurrido
 */

const useTimeout = (time = 2000,  functionFinish = () => {} )  => {
  
    const [isFinish, setIsFinish] = useState(false);
    useEffect(() => {
      
        setTimeout(() => {
            setIsFinish(!isFinish);
            functionFinish();
        }, time);
    

    }, [])
    
  
    return {
        isFinish,
  }
}

export default useTimeout;