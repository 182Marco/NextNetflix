import { en } from "./languages";

export const leftNavLinks = (l : string) =>  [
    {
      name: l == en ? 'Home' : 'Home',
      route: '/'
    },
    {
      name: l == en ? 'Tv series' : 'Serie TV',
      route: '#'
    },
    {
      name: l == en ? 'Movie' : 'Film',
      route: '#'
    },
    {
      name: l == en ? 'New and popular' : 'Nuovi e popolari',
      route: '#'
    },
    {
      name: l == en ? 'My list' : 'La mia lista',
      route: '#'
    },
    {
      name: l == en ? 'Browse by language' : 'Sfoglia per lingua',
      route: '#'
    },
  ];