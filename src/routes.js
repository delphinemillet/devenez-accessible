import Interactions from './pages/interactions'
import Images from './pages/images'
import Formulaire from './pages/formulaire'
import Modale from './pages/modale'
import Couleurs from './pages/couleurs'


export const routes = [
  {
    title: 'Elements interactifs',
    path: '/interactions',
    component: Interactions
  },
  {
    title: 'Images',
    path: '/images',
    component: Images
  },
  {
    title: 'Formulaire',
    path: '/formulaire',
    component: Formulaire
  },
  {
    title: 'Modale',
    path: '/modale',
    component: Modale
  },
  {
    title: 'Couleurs',
    path: '/couleurs',
    component: Couleurs
  }
]
