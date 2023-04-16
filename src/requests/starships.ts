import axios from 'axios';

import { starships } from '@/types';

const getStarships = async (): Promise<starships.Starship[]> => {
  try {
    const starships = await axios.get('starships');
    return starships.data.results;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getStarships;
