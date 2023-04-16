import React, { ReactElement, useState } from 'react';
import Link from 'next/link';

import { starships } from '@/types';
import styles from '@/styles/Home.module.css';
import getObjectId from '@/utils/getObjectId';

import ShipsFilter from '../ShipsFilter';
import ShipsSearch from '../ShipsSearch';

import { List } from './style';

const ShipsOverview: React.FC<{ starships: starships.Starship[]; films: starships.Film[] }> = ({
  starships,
  films,
}) => {
  const [film, setFilm] = useState<string | undefined>();
  const [ship, setShip] = useState<string | undefined>();

  const getShipsList = (): ReactElement[] =>
    starships
      ?.filter((starship) => (film ? starship.films.includes(film) : true))
      ?.filter((starship) =>
        ship ? starship.name.toLocaleLowerCase().includes(ship.toLocaleLowerCase()) : true
      )
      .map((starship) => (
        <li key={starship.name}>
          <Link
            aria-label="move to starship page"
            href={`/starships/${encodeURIComponent(getObjectId(starship.url))}`}
            key={starship.name}
          >
            {starship.name}
          </Link>
        </li>
      ));

  return (
    <div className={styles.main}>
      <ShipsFilter films={films} setFilm={setFilm} />
      <ShipsSearch starships={starships} setShip={setShip} />
      <List>{getShipsList()}</List>
    </div>
  );
};

export default ShipsOverview;
