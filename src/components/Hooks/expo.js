import { useEffect, useState } from "react";

const useReview = () =>{
    
    const [expo, setExpo] = useState([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setExpo(data));
    }, []);
    
    return [expo, setExpo];
}

export default useReview;