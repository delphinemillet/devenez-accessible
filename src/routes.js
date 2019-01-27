import Interactions from './pages/interactions'
import Images from './pages/images'
import Formulaires from './pages/formulaires'
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
    title: 'Formulaires',
    path: '/formulaires',
    component: Formulaires
  },
  {
    title: 'Structure',
    path: '/structure',
    component: Structure
  },
  {
    title: 'Modale',
    path: '/modale',
    component: Modale
  },
  {
    title: 'Styles',
    path: '/styles',
    component: Styles
  }
]
