import { useEffect, useRef, useState } from "react";



const useTimeout = (time = 2000,  functionFinish = () => {} )  => {
  
    const [isFinish, setIsFinish] = useState(false);
    const isMounted = useRef(true);
    useEffect(() => {
      
        setTimeout(() => {
            setIsFinish(!isFinish);
            functionFinish();
        }, time);
    
      return () => {
        isMounted.current= false;
        setIsFinish(false);
      }
    }, [])
    
  
    return {
        isFinish,
  }
}

export default useTimeout;