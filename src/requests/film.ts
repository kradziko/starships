import axios from 'axios';

import { starships } from '@/types';

const getFilm = async (id: string): Promise<starships.Film> => {
  const starship = await axios.get('films/:id/'.replace(':id', id));
  return starship.data;
};

export default getFilm;
