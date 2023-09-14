import { useState, useEffect } from 'react';
import axios from 'axios';
import { Member } from '../utils/models';

function useUserById(id: number | undefined) {
  const [data, setData] = useState<Member | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3333/api/users/user/' + id);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]); // Include 'id' as a dependency to re-fetch when 'id' changes

  return data;
}

export default useUserById;