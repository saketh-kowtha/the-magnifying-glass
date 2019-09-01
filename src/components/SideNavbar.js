import React from 'react'
import './SideNavbar.scss'
import {NavElement} from '../helper/'
import search from '../assests/Search.svg'
import dashboard from '../assests/Dashboard.svg'
import briefcase from '../assests/Briefcase.svg'

const SideNavbar = (props) =>{
    let [active, setActive] = React.useState(0)
    const navItems = [
        {type: 'img', data: dashboard, onClick : () => setActive(0)},
        {type: 'img', data: search, onClick : () => setActive(1)},
        {type: 'img', data: briefcase, onClick : () => setActive(2)}
    ]

    return  <div className={'SideNavbar'}>
                {navItems.map((e, index) => NavElement(e, index ,active))}
            </div>
}


export default SideNavbar