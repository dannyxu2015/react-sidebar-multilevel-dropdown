import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    label: 'Overview',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    id: 1,
    subNav: [
      {
        label: 'Users',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />,
        id: 2,
        subNav:[]
      },
      {
        label: 'Revenue',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />,
        id: 3,
        subNav:[]
      }
    ]
  },
  {
    label: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    id: 4,
    subNav: [
      {
        label: 'Reports 1',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        id: 5,
        subNav: [
          {
            label: 'rep11',
            path: '/reports/reports1/rep11',
            icon: <IoIcons.IoIosPaper />,
            id: 6, 
            subNav: [
              {
                label: 'rep111',
                path: '/reports/reports1/rep11',
                icon: <IoIcons.IoIosPaper />,
                id: 7,
                subNav: []
              },
              {
                label: 'rep112',
                path: '/reports/reports1/rep12',
                icon: <IoIcons.IoIosPaper />,
                id: 8,
                subNav: []
              }
            ]    
          },
          {
            label: 'rep12',
            path: '/reports/reports1/rep12',
            icon: <IoIcons.IoIosPaper />,
            id: 9,
            subNav: [
              {
                label: 'rep121',
                path: '/reports/reports1/rep11',
                icon: <IoIcons.IoIosPaper />,
                id: 11,
                subNav: []
              },
              {
                label: 'rep122',
                path: '/reports/reports1/rep12',
                icon: <IoIcons.IoIosPaper />,
                id: 12,
                subNav: []
              }
            ]

          }
        ]
    
      },
      {
        label: 'Reports 2',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        id: 13, 
        subNav: [
          {
            label: 'rep21',
            path: '/reports/reports1/rep11',
            icon: <IoIcons.IoIosPaper />,
            id: 14,
            subNav: []
          },
          {
            label: 'rep22',
            path: '/reports/reports1/rep12',
            icon: <IoIcons.IoIosPaper />,
            id: 15,
            subNav: []
          }
        ]    

      },
      {
        label: 'Reports 3',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />,
        id: 16,
        subNav: []
      }
    ]
  },
  {
    label: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    id: 17,
    subNav: []
  },
  {
    label: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    id: 18,
    subNav: []
  },
  {
    label: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    id: 19,
    subNav: [
      {
        label: 'Message 1',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />,
        id: 20,
        subNav: []
      },
      {
        label: 'Message 2',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />,
        id: 21,
        subNav: []
      }
    ]
  },
  {
    label: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    id: 22,
    subNav: []
  }
];
