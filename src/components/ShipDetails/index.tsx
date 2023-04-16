import React, { ReactElement } from 'react';

import { components } from '@/types';

import { List } from '../ShipsOverview/style';

const ShipDetails: React.FC<components.ShipDetails> = ({ starship, films }) => {
  const getFormattedDate = (date: string): string => {
    let options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('en-US', options);
  };

  const getFormattedKey = (key: string): string =>
    key.charAt(0).toUpperCase() + key.slice(1).replaceAll('_', ' ');

  const getShipVaule = (key: string, value: string | string[]): ReactElement | undefined => {
    let formattedVal = '';

    if (key === 'films' && Array.isArray(value)) {
      formattedVal = value
        .map((element) => films.find((film) => film.url === element)?.title)
        .join(', ');
    } else if ((key === 'created' || key === 'edited') && !Array.isArray(value)) {
      formattedVal = getFormattedDate(value);
    } else if (['url', 'pilots'].includes(key)) {
      return;
    } else {
      formattedVal = Array.isArray(value) ? value.join(', ') : value;
    }
    return (
      <li key={key}>
        {getFormattedKey(key)}: {formattedVal}
      </li>
    );
  };

  return <List>{Object.entries(starship)?.map(([key, value]) => getShipVaule(key, value))}</List>;
};

export default ShipDetails;
