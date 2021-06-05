interface IMenuData {
  id: number;
  iconUrl: string;
  linkText: string;
  url: string;
}

export const menu1: IMenuData[] = [
  {
    id: 0,
    iconUrl: './assets/house2.svg',
    linkText: 'Home',
    url: '/',
  },
  {
    id: 1,
    iconUrl: './assets/publications.svg',
    linkText: 'Publications',
    url: '/testpage',
  },
  {
    id: 2,
    iconUrl: './assets/people.svg',
    linkText: 'People',
    url: '/testpage',
  },
  {
    id: 3,
    iconUrl: './assets/entities2.svg',
    linkText: 'Entities',
    url: '/entities',
  },
  {
    id: 4,
    iconUrl: './assets/administration.svg',
    linkText: 'Administration',
    url: '/testpage',
  },
];

export const menu2: IMenuData[] = [
  {
    id: 0,
    iconUrl: './assets/entities.png',
    linkText: 'Client contract',
    url: '/workspace',
  },
  {
    id: 1,
    iconUrl: './assets/entities.png',
    linkText: 'Supplier contract',
    url: '/workspace',
  },
  {
    id: 2,
    iconUrl: './assets/entities.svg',
    linkText: 'Corporate',
    url: '/workspace',
  },
  {
    id: 3,
    iconUrl: './assets/entities.png',
    linkText: 'Group Norms',
    url: '/workspace',
  },
  {
    id: 4,
    iconUrl: './assets/entities.png',
    linkText: 'Real estate contracts',
    url: '/workspace',
  },
];
