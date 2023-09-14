import { useState, useEffect } from 'react';
import axios from 'axios';

function getUpdatedTask(id: number | undefined) {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3333/api/updatedtask/findbytaskid/' + id);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]); // Include 'id' as a dependency to re-fetch when 'id' changes

  return data;
}

export default getUpdatedTask