export default [
  {
    path: '/',
    redirect: '/exercise',
  },
  {
    path: '/exercise',
    redirect: '',
    component: () => import('@/layout/layout.vue'),
    children: [
      {}
    ]
  },
]