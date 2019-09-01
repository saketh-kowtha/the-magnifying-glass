import React from 'react'
import SideNavbar from '../components/SideNavbar'
import Navbar from '../components/Navbar'
import DataView from './DataView'

 const Index = (props) => {

        return <React.Fragment>
                <Navbar/>
                <SideNavbar />
                <DataView />
        </React.Fragment>                
}

export default Index