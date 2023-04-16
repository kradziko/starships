import axios from 'axios';

import { starships } from '@/types';

const getPerson = async (id: string): Promise<starships.Person | undefined> => {
  try {
    const starships = await axios.get('people/:id/'.replace(':id', id));
    return starships.data;
  } catch (err) {
    console.log(err);
  }
};

export default getPerson;
