import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '3f0'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/sprint1',
    component: ComponentCreator('/blog/sprint1', '418'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b7b'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '949'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '72c'),
            routes: [
              {
                path: '/docs/category/milestones',
                component: ComponentCreator('/docs/category/milestones', '647'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/milestones/MS1 - Inception Phase/Deriverables',
                component: ComponentCreator('/docs/milestones/MS1 - Inception Phase/Deriverables', 'b0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/milestones/MS1 - Inception Phase/ProjectDescription',
                component: ComponentCreator('/docs/milestones/MS1 - Inception Phase/ProjectDescription', 'bef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/milestones/MS2 - Elaboration Phase/ProjectDescription',
                component: ComponentCreator('/docs/milestones/MS2 - Elaboration Phase/ProjectDescription', '908'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/milestones/MS3 - Construction/ProjectDescription',
                component: ComponentCreator('/docs/milestones/MS3 - Construction/ProjectDescription', 'cbe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/milestones/MS4 - Transition/ProjectDescription',
                component: ComponentCreator('/docs/milestones/MS4 - Transition/ProjectDescription', 'ebb'),
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
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
