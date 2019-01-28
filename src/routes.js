import Interactions from './pages/interactions'
import Images from './pages/images'
import Formulaire from './pages/formulaire'
import Structure from './pages/structure'
import Modale from './pages/modale'
import Styles from './pages/styles'


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
    title: 'Structure',
    path: '/structure',
    component: Structure
  },
  {
    title: 'Styles',
    path: '/styles',
    component: Styles
  }
]
