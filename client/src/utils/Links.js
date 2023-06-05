import React from 'react';
import {CgProfile} from "react-icons/cg"
import {AiOutlineInfoCircle} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import {BiSearchAlt} from "react-icons/bi"
import {RiDashboardFill} from "react-icons/ri"
import {MdOutlineScreenSearchDesktop,MdOutlineListAlt} from "react-icons/md"
import {TbScan} from "react-icons/tb"
import {BsShieldFillExclamation,BsFillShieldFill} from "react-icons/bs"
import {FaFileUpload,FaToolbox} from "react-icons/fa"
import {FaNetworkWired} from "react-icons/fa"
import {AiFillInfoCircle} from "react-icons/ai"
import {BsTelephoneFill} from "react-icons/bs"
import {DiRedhat} from "react-icons/di"


export const linksPremium = [
    {
      title: 'Main',
      links: [
        {
          name: 'Dashboard',
          icon: <RiDashboardFill />,
          link:'dashboard'
        },
        {
          name: 'Subdomains',
          icon: <MdOutlineScreenSearchDesktop/>,
          link:'subdomains'
        },
        {
          name: 'Vulnerabilities',
          icon: <BsShieldFillExclamation/>,
          link:'vulnerabilities'
        },
        {
          name: 'Port Scan',
          icon: <TbScan/>,
          link:'portscan'
        },
        {
          name: 'Pen-testing History',
          icon: <FaFileUpload/>,
          link:'pentesting history'
        },
        {
            name: 'Subdomain monitoring',
            icon: <FaNetworkWired/>,
            link:'subdomainmonotoring'
          },
          {
            name: 'Hacking tools',
            icon: <BsFillShieldFill/>,
            link:'hackingtools'
          },
          {
            name: 'Ptaas',
            icon: <FaToolbox/>,
            link:'ptaas'
          },
          {
            name: 'Custom list scan',
            icon: <MdOutlineListAlt/>,
            link:'customscan'
          },
          {
            name: 'Dark web',
            icon: <DiRedhat/>,
            link:'darkweb'
          },
      ],
    },
  
    {
      title: 'Pages',
      links: [
        {
          name: 'About',
          icon: <AiFillInfoCircle/>,
          link:'about'
        },
        {
          name: 'Contact',
          icon: <BsTelephoneFill />,
          link:'contact'
        },

      ],
    },
]


export const linksFree = [
  {
    title: 'Main',
    links: [
      {
        name: 'Dashboard',
        icon: <RiDashboardFill />,
        link:'dashboard'
      },
      {
        name: 'Subdomains',
        icon: <MdOutlineScreenSearchDesktop/>,
        link:'subdomains'
      },
      {
        name: 'Vulnerabilities',
        icon: <BsShieldFillExclamation/>,
        link:'vulnerabilities'
      },
      {
        name: 'Port Scan',
        icon: <TbScan/>,
        link:'portscan'
      },
      {
          name: 'Subdomain monitoring',
          icon: <FaNetworkWired/>,
          link:'subdomainmonotoring'
        },
        {
          name: 'Hacking tools',
          icon: <BsFillShieldFill/>,
          link:'hackingtools'
        },
        {
          name: 'Custom list scan',
          icon: <MdOutlineListAlt/>,
          link:'customscan'
        },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'About',
        icon: <AiFillInfoCircle/>,
        link:'about'
      },
      {
        name: 'Contact',
        icon: <BsTelephoneFill />,
        link:'contact'
      },

    ],
  },
]