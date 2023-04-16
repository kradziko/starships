import React, { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { starships } from '@/types';
import getObjectId from '@/utils/getObjectId';

import { Button } from '../ShipsFilter/style';

import { Input, Datalist } from './style';

const ShipsSearch: React.FC<{
  starships: starships.Starship[];
  setShip: React.Dispatch<React.SetStateAction<string | undefined>>;
}> = ({ starships, setShip }) => {
  const router = useRouter();
  const [shipSearch, setShipSearch] = useState<string>('');
  const [shipSelect, setShipSelect] = useState<string | undefined>();

  useEffect(() => {
    shipSelect && router.push(`starships/${getObjectId(shipSelect)}`);
  }, [router, shipSelect]);

  const getShipsOptions = (): ReactElement[] =>
    starships.map((starship) => <option key={starship.name}>{starship.name}</option>);

  const handleSelect = (value: string): void | boolean =>
    setShipSelect(starships.find((ship) => ship.name === value)?.url);

  const handleClear = (): void => {
    setShip(undefined);
    setShipSearch('');
  };

  return (
    <>
      <label htmlFor="site-search">Search the site:</label>
      <div>
        <Input
          type="search"
          id="site-search"
          list="ships"
          aria-label="Search starship by it's name"
          value={shipSearch}
          onChange={({ target }) => setShipSearch(target.value)}
          onSelect={({ target }) => handleSelect((target as EventTarget & HTMLInputElement).value)}
        />
        <Datalist id="ships">{getShipsOptions()}</Datalist>
        <Button aria-label="Search button" onClick={() => setShip(shipSearch)}>
          Search
        </Button>
        <Button aria-label="Clear button" onClick={handleClear}>
          Clear
        </Button>
      </div>
    </>
  );
};

export default ShipsSearch;
