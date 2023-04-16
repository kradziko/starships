import React from 'react';
import Link from 'next/link';

import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.main}>
          <h1 aria-label="move to starships page" className={styles.center}>
            <Link href="/starships">THE STARWARS STARSHIPS</Link>
          </h1>
        </div>
        <p className={styles.center}>Karolina Radzikowska</p>
      </div>
    </>
  );
}
