export const constantRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/Index'),
  },
  {
    path: '/practice',
    name: 'practice',
    component: () => import('@/views/practice/Index'),
  },
  {
    path: '/exception/404',
    name: 'exception404',
    component: () => import('@/views/exception/404'),
  },
  {
    path: '*',
    redirect: '/exception/404'
  }
];