import axios from 'axios';

import { starships } from '@/types';

const getStarship = async (id: string): Promise<starships.Starship> => {
  const starship = await axios.get('starships/:id/'.replace(':id', id));
  return starship.data;
};

export default getStarship;
