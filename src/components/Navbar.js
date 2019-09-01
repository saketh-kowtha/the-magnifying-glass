import React from 'react'
import './Navbar.scss'
import bell from '../assests/Bell.svg'
import user from '../assests/User.svg'
import {NavElement} from '../helper/'

const Navbar = (props) => {
    let [active, setActive] = React.useState(null)
        const navItems = [
            {type: 'title', data: 'Logo'}, 
            {type: 'img', data: user, onClick: () => setActive(1)},
            {type: 'img', data: bell, onClick: () => setActive(2)}
        ]
        return <div className='Navbar'>
            {
                navItems.map((e,index) => NavElement(e, index, active))
            }
        </div>
}

export default Navbar