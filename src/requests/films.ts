import axios from 'axios';

import { starships } from '@/types';

const getFilms = async (): Promise<starships.Film[]> => {
  try {
    const films = await axios.get('films');
    return films.data.results;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getFilms;
