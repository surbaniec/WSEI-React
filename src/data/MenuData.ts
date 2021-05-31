interface IMenuData {
  iconUrl: string;
  linkText: string;
  url: string;
}

export const menu1: IMenuData[] = [
  {
    iconUrl: './assets/house2.svg',
    linkText: 'Home',
    url: '/',
  },
  {
    iconUrl: './assets/publications.svg',
    linkText: 'Publications',
    url: '/testpage',
  },
  {
    iconUrl: './assets/people.svg',
    linkText: 'People',
    url: '/testpage',
  },
  {
    iconUrl: './assets/entities2.svg',
    linkText: 'Entities',
    url: '/entities',
  },
  {
    iconUrl: './assets/administration.svg',
    linkText: 'Administration',
    url: '/testpage',
  },
];

export const menu2: IMenuData[] = [
  {
    iconUrl: './assets/entities.png',
    linkText: 'Client contract',
    url: '/workspace',
  },
  {
    iconUrl: './assets/entities.png',
    linkText: 'Supplier contract',
    url: '/workspace',
  },
  {
    iconUrl: './assets/entities.svg',
    linkText: 'Corporate',
    url: '/workspace',
  },
  {
    iconUrl: './assets/entities.png',
    linkText: 'Group Norms',
    url: '/workspace',
  },
  {
    iconUrl: './assets/entities.png',
    linkText: 'Real estate contracts',
    url: '/workspace',
  },
];
