import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Documentation/__docusaurus/debug',
    component: ComponentCreator('/Documentation/__docusaurus/debug', 'd5e'),
    exact: true
  },
  {
    path: '/Documentation/__docusaurus/debug/config',
    component: ComponentCreator('/Documentation/__docusaurus/debug/config', '70b'),
    exact: true
  },
  {
    path: '/Documentation/__docusaurus/debug/content',
    component: ComponentCreator('/Documentation/__docusaurus/debug/content', '03c'),
    exact: true
  },
  {
    path: '/Documentation/__docusaurus/debug/globalData',
    component: ComponentCreator('/Documentation/__docusaurus/debug/globalData', '149'),
    exact: true
  },
  {
    path: '/Documentation/__docusaurus/debug/metadata',
    component: ComponentCreator('/Documentation/__docusaurus/debug/metadata', '9b4'),
    exact: true
  },
  {
    path: '/Documentation/__docusaurus/debug/registry',
    component: ComponentCreator('/Documentation/__docusaurus/debug/registry', 'd31'),
    exact: true
  },
  {
    path: '/Documentation/__docusaurus/debug/routes',
    component: ComponentCreator('/Documentation/__docusaurus/debug/routes', '128'),
    exact: true
  },
  {
    path: '/Documentation/blog',
    component: ComponentCreator('/Documentation/blog', 'ee0'),
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
    path: '/Documentation/blog/sprint2',
    component: ComponentCreator('/Documentation/blog/sprint2', '57f'),
    exact: true
  },
  {
    path: '/Documentation/blog/sprint3',
    component: ComponentCreator('/Documentation/blog/sprint3', '370'),
    exact: true
  },
  {
    path: '/Documentation/blog/sprint4',
    component: ComponentCreator('/Documentation/blog/sprint4', 'f5f'),
    exact: true
  },
  {
    path: '/Documentation/blog/sprint5',
    component: ComponentCreator('/Documentation/blog/sprint5', '786'),
    exact: true
  },
  {
    path: '/Documentation/blog/sprint6',
    component: ComponentCreator('/Documentation/blog/sprint6', 'be6'),
    exact: true
  },
  {
    path: '/Documentation/docs',
    component: ComponentCreator('/Documentation/docs', 'f0a'),
    routes: [
      {
        path: '/Documentation/docs',
        component: ComponentCreator('/Documentation/docs', '72f'),
        routes: [
          {
            path: '/Documentation/docs',
            component: ComponentCreator('/Documentation/docs', 'd37'),
            routes: [
              {
                path: '/Documentation/docs/category/milestones',
                component: ComponentCreator('/Documentation/docs/category/milestones', 'e05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Documentation/docs/milestones/MS1 - Inception Phase/Deliverables',
                component: ComponentCreator('/Documentation/docs/milestones/MS1 - Inception Phase/Deliverables', 'f45'),
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
                path: '/Documentation/docs/milestones/MS2 - Elaboration Phase/Deliverables',
                component: ComponentCreator('/Documentation/docs/milestones/MS2 - Elaboration Phase/Deliverables', 'c44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Documentation/docs/milestones/MS2 - Elaboration Phase/Requirements, Architecture, and Design',
                component: ComponentCreator('/Documentation/docs/milestones/MS2 - Elaboration Phase/Requirements, Architecture, and Design', 'f0a'),
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
