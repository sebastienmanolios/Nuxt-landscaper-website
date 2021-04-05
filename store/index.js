
export const getters = {
  menu: () => [
    { text: 'Accueil', to: '/' },
    { text: 'Entreprise', to: '/entreprise' },
    { text: 'Croquis & Plans', to: '/croquisplans' },
    { text: 'Réalisations', to: '/realisations' },
    { text: 'Contact', to: '/contact' },
  ],
  themes: () => [
    {
      id : 1,
      title : 'Au 7ième ciel',
      theme : 'ciel',
      number : 10
    },
    {
      id : 2,
      title : 'Au milieu coule un bassin',
      theme : 'bassin',
      number : 7
    },
     {
       id : 3,
       title : 'Au milieu de la garrigue',
       theme : 'garrigue',
       number : 9
     },
    
     {
       id : 4,
       title : 'Petit pas à la japonaise',
       theme : 'japon',
       number : 14
     },
     {
       id : 5,
       title : 'Mon jardin de curé',
       theme : 'cure',
       number : 6
     },
     {
       id : 6,
       title : 'Mon jardin secret',
       theme : 'secret',
       number : 9
     }        
  ]
};