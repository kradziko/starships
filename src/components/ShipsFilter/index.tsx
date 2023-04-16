import React, { ReactElement } from 'react';

import { starships } from '@/types';

import { Select, Button } from './style';

const ShipsFilter: React.FC<{
  films: starships.Film[];
  setFilm: React.Dispatch<React.SetStateAction<string | undefined>>;
}> = ({ films, setFilm }) => {
  const getFilmsOptions = (): ReactElement[] =>
    films.map((film) => (
      <option key={film.title} value={film.url}>
        {film.title}
      </option>
    ));

  return (
    <>
      <label htmlFor="site-search">Filter ships by film title:</label>
      <div>
        <Select aria-label="select film" onChange={(event) => setFilm(event.target.value)}>
          {getFilmsOptions()}
        </Select>
        <Button aria-label="clear button" onClick={() => setFilm(undefined)}>
          Clear
        </Button>
      </div>
    </>
  );
};

export default ShipsFilter;
