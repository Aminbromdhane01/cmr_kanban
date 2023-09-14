import { useEffect, useState } from "react";
import axios from "axios";

const  usePost = (url : string , postData : any) =>{
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    axios.post(url,postData).then((response => {setData(response.data)  
    
    }))
    .catch((error) => setError(error))
    .finally(()=>setLoading(false))

},[url])

  

  return { data, error, loading};
}

export default usePost;
