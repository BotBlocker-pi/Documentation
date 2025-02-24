import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Documentation/blog',
    component: ComponentCreator('/Documentation/blog', 'c0f'),
    exact: true
  },
  {
    path: '/Documentation/blog/archive',
    component: ComponentCreator('/Documentation/blog/archive', 'b74'),
    exact: true
  },
  {
    path: '/Documentation/blog/authors',
    component: ComponentCreator('/Documentation/blog/authors', 'e57'),
    exact: true
  },
  {
    path: '/Documentation/blog/sprint1',
    component: ComponentCreator('/Documentation/blog/sprint1', '52e'),
    exact: true
  },
  {
    path: '/Documentation/docs',
    component: ComponentCreator('/Documentation/docs', '33e'),
    routes: [
      {
        path: '/Documentation/docs',
        component: ComponentCreator('/Documentation/docs', '514'),
        routes: [
          {
            path: '/Documentation/docs',
            component: ComponentCreator('/Documentation/docs', '021'),
            routes: [
              {
                path: '/Documentation/docs/category/milestones',
                component: ComponentCreator('/Documentation/docs/category/milestones', 'e05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Documentation/docs/milestones/MS1 - Inception Phase/ProjectDescription',
                component: ComponentCreator('/Documentation/docs/milestones/MS1 - Inception Phase/ProjectDescription', '1b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Documentation/docs/milestones/MS2 - Elaboration Phase/ProjectDescription',
                component: ComponentCreator('/Documentation/docs/milestones/MS2 - Elaboration Phase/ProjectDescription', 'ed0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Documentation/docs/milestones/MS3 - Construction/ProjectDescription',
                component: ComponentCreator('/Documentation/docs/milestones/MS3 - Construction/ProjectDescription', '148'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Documentation/docs/milestones/MS4 - Transition/ProjectDescription',
                component: ComponentCreator('/Documentation/docs/milestones/MS4 - Transition/ProjectDescription', 'dc5'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Documentation/',
    component: ComponentCreator('/Documentation/', 'd2f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
