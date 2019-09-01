import React from 'react'
import SideNavbar from '../components/SideNavbar'
import Navbar from '../components/Navbar'
import DataView from './DataView'

export default class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <React.Fragment>
                <Navbar/>
                <SideNavbar />
                <DataView />
        </React.Fragment>
                
    }
}

