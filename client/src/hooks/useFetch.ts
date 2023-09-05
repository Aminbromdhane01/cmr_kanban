import { useEffect, useState } from "react"
import axios from "axios"
import { Member } from "../utils/models"

function useFetch(url :string) {

    const [data , setdata] = useState<Member[]>()
    const [error  , seterror] = useState('')
    const [loading ,setloading] = useState(false)
    
    useEffect(()=>{
        setloading(true)
        axios.get(url).then((response => {setdata(response.data)  
        
        }))
        .catch((error) => seterror(error))
        .finally(()=>setloading(false))

    },[url])
  return {data,error,loading}

 
}

export default useFetch