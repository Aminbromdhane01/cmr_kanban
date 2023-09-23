import { useState, useEffect } from 'react';
import axios from 'axios';


function getProjectById(id: number | undefined) {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3333/api/projects/findbyId/' + id);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]); 

  return data;
}

export default getProjectById