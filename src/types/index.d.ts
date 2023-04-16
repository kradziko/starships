export declare namespace starships {
  interface Starship {
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: string;
    crew: string;
    edited: string;
    hyperdrive_rating: string;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    films: string[];
    pilots: string[];
    starship_class: string;
    url: string;
  }

  interface Film {
    characters: string[];
    created: string;
    director: string;
    edited: string;
    created: string;
    starships: string;
    title: string;
    director: string;
    edited: string;
    episode_id: number;
    opening_crawl: string;
    planets: string[];
    producer: string;
    release_date: string;
    species: string[];
    url: string;
    vehicles: string[];
  }

  interface Person {
    birth_year: string;
    eye_color: string;
    films: string[];
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: string;
    name: string;
    skin_color: number;
    created: string;
    edited: string;
    species: string[];
    starships: string[];
    url: string;
    vehicles: string[];
  }
}

export declare namespace components {
  interface ShipDetails {
    starship: starships.Starship;
    films: starships.Film[];
  }
}
