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
    component: ComponentCreator('/Documentation/blog', '3f4'),
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
    path: '/Documentation/blog/page/2',
    component: ComponentCreator('/Documentation/blog/page/2', '3e6'),
    exact: true
  },
  {
    path: '/Documentation/blog/week1',
    component: ComponentCreator('/Documentation/blog/week1', 'efd'),
    exact: true
  },
  {
    path: '/Documentation/blog/week10',
    component: ComponentCreator('/Documentation/blog/week10', '0d7'),
    exact: true
  },
  {
    path: '/Documentation/blog/week11',
    component: ComponentCreator('/Documentation/blog/week11', 'c30'),
    exact: true
  },
  {
    path: '/Documentation/blog/week13',
    component: ComponentCreator('/Documentation/blog/week13', 'f4e'),
    exact: true
  },
  {
    path: '/Documentation/blog/week13',
    component: ComponentCreator('/Documentation/blog/week13', '55d'),
    exact: true
  },
  {
    path: '/Documentation/blog/week14',
    component: ComponentCreator('/Documentation/blog/week14', '9d8'),
    exact: true
  },
  {
    path: '/Documentation/blog/week15',
    component: ComponentCreator('/Documentation/blog/week15', 'e29'),
    exact: true
  },
  {
    path: '/Documentation/blog/week16',
    component: ComponentCreator('/Documentation/blog/week16', '5b2'),
    exact: true
  },
  {
    path: '/Documentation/blog/week2',
    component: ComponentCreator('/Documentation/blog/week2', '29e'),
    exact: true
  },
  {
    path: '/Documentation/blog/week3',
    component: ComponentCreator('/Documentation/blog/week3', '18c'),
    exact: true
  },
  {
    path: '/Documentation/blog/week4',
    component: ComponentCreator('/Documentation/blog/week4', 'eec'),
    exact: true
  },
  {
    path: '/Documentation/blog/week5',
    component: ComponentCreator('/Documentation/blog/week5', 'e3f'),
    exact: true
  },
  {
    path: '/Documentation/blog/week6',
    component: ComponentCreator('/Documentation/blog/week6', '645'),
    exact: true
  },
  {
    path: '/Documentation/blog/week7',
    component: ComponentCreator('/Documentation/blog/week7', 'dbf'),
    exact: true
  },
  {
    path: '/Documentation/blog/week8',
    component: ComponentCreator('/Documentation/blog/week8', 'fc9'),
    exact: true
  },
  {
    path: '/Documentation/blog/week9',
    component: ComponentCreator('/Documentation/blog/week9', '3d1'),
    exact: true
  },
  {
    path: '/Documentation/docs',
    component: ComponentCreator('/Documentation/docs', '958'),
    routes: [
      {
        path: '/Documentation/docs',
        component: ComponentCreator('/Documentation/docs', '23a'),
        routes: [
          {
            path: '/Documentation/docs',
            component: ComponentCreator('/Documentation/docs', '113'),
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
                path: '/Documentation/docs/milestones/MS3 - Construction/Deliverables',
                component: ComponentCreator('/Documentation/docs/milestones/MS3 - Construction/Deliverables', '6f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Documentation/docs/milestones/MS3 - Construction/ProjectDevelopment',
                component: ComponentCreator('/Documentation/docs/milestones/MS3 - Construction/ProjectDevelopment', '1ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Documentation/docs/milestones/MS4 - Transition/Deliverables',
                component: ComponentCreator('/Documentation/docs/milestones/MS4 - Transition/Deliverables', 'b60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Documentation/docs/milestones/MS4 - Transition/ProjectDevelopment',
                component: ComponentCreator('/Documentation/docs/milestones/MS4 - Transition/ProjectDevelopment', '996'),
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
