import { createBrowserRouter } from 'react-router'
import Layout from './components/Layout.tsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Projects from './pages/Projects.tsx'
import Contact from './pages/Contact.tsx'
import NotFound from './pages/NotFound.tsx'
import UnderConstruction from './pages/UnderConstruction.tsx'
import { UNDER_CONSTRUCTION } from './config.ts'

export const router = createBrowserRouter(
  UNDER_CONSTRUCTION
    ? [{ path: '*', Component: UnderConstruction }]
    : [
        {
          path: '/',
          Component: Layout,
          children: [
            { index: true, Component: Home },
            { path: 'about', Component: About },
            { path: 'projects', Component: Projects },
            { path: 'contact', Component: Contact },
            { path: '*', Component: NotFound },
          ],
        },
      ],
)
