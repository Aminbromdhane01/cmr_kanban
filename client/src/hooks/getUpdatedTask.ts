import { useState, useEffect } from 'react';
import { axiosInstance, setAuthToken } from '../config/axiosConfig';

function getUpdatedTask(id: number | undefined) {
  const [data, setData] = useState<any | null>(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
    setAuthToken(token)
      try {
        const response = await axiosInstance.get('/api/updatedtask/findbytaskid/' + id);
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