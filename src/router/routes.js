
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', name: 'home', component: () => import('pages/index') },
      { path: 'pergunta', name: 'pergunta', component: () => import('pages/pergunta') },
      { path: 'rank', name: 'rank', component: () => import('pages/rank') },
      { path: 'equipe', name: 'equipe', component: () => import('pages/equipe') },
      { path: 'indexpergunta', name: 'indexpergunta', component: () => import('pages/indexpergunta') }
    ]
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
