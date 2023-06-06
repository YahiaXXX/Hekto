import React from 'react';
import {FaLayerGroup} from "react-icons/fa"
import {CiGrid41} from "react-icons/ci"
import {RxPerson} from "react-icons/rx"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {TfiTruck} from "react-icons/tfi"
import {GrCompliance} from "react-icons/gr"
import {FcSettings} from "react-icons/fc"
import {HiOutlineLogout} from "react-icons/hi"


export const linksPremium = [
    {
      title: 'Main',
      links: [
        {
          name: 'Dashboard',
          icon: <FaLayerGroup />,
          link:'dashboard'
        },
        {
          name: 'Product',
          icon: <CiGrid41/>,
          link:'product'
        },
        {
          name: 'Customers',
          icon: <RxPerson/>,
          link:'customers'
        },
        {
          name: 'Orders',
          icon: <AiOutlineShoppingCart/>,
          link:'orders'
        },
        {
            name: 'Customer complaint',
            icon: <GrCompliance/>,
            link:'customer complaint'
          },
          {
            name: 'Setting',
            icon: <FcSettings/>,
            link:'settings'
          },
      ],
    },
  
  ]