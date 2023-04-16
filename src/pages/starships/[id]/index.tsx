import React, { ReactElement } from 'react';

import getStarship from '@/requests/starship';
import getStarships from '@/requests/starships';
import { starships } from '@/types';
import getObjectId from '@/utils/getObjectId';
import Layout from '@/components/Layout';
import ShipDetails from '@/components/ShipDetails';
import getFilms from '@/requests/films';

function StarshipPage({
  starship,
  films,
}: {
  starship: starships.Starship;
  films: starships.Film[];
}): ReactElement {
  return (
    <Layout>
      <ShipDetails starship={starship} films={films} />
    </Layout>
  );
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const starship = await getStarship(params.id);
  const films = await getFilms();
  return { props: { starship, films } };
}

export async function getStaticPaths() {
  const starships = await getStarships();
  const paths = starships.map((starship: any) => ({
    params: { id: getObjectId(starship.url) },
  }));

  return { paths, fallback: false };
}

export default StarshipPage;
