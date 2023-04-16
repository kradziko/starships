import React from 'react';

import getfilms from '@/requests/films';
import getStarships from '@/requests/starships';
import { starships } from '@/types';
import ShipsOverview from '@/components/ShipsOverview';
import Layout from '@/components/Layout';

function StarshipsPage({
  starships,
  films,
}: {
  starships: starships.Starship[];
  films: starships.Film[];
}) {
  return (
    <Layout>
      <ShipsOverview starships={starships} films={films} />
    </Layout>
  );
}

export async function getStaticProps() {
  const starships = await getStarships();
  const films = await getfilms();

  return { props: { starships, films } };
}

export default StarshipsPage;
