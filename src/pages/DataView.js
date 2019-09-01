import React from 'react'
import './DataView.scss'
import Select from '../components/Select'
import genJobCard from '../components/jobCard'
import Pagination from '../components/Pagination'

const data = require('../helper/data')

class DataView extends React.Component {
        constructor(props){
            super(props)
            this.state = {paginationCount : 1, data: data}
        }

        setPaginationCount = (e) =>{
            this.setState({paginationCount: e})
        }

        clearAll = () =>{
            this.setState({data: data, category: '', industry:'',status:'',time:''})
        }
        sort_ = (type, event) => {
            this.setState({[type]:   event.target.value})
            let value = event.target.value
            if(type==='status')
                this.setState({data: data.filter(e => e.status == value)})
            else if(type === 'time')
                if(value === "Least Time Left First")
                    this.setState({data: data.sort((a,b)=> a.time > b.time ? -1 : 1)})
                else
                    this.setState({data: data.sort((a,b)=> b.time > a.time ? -1 : 1)})

        }
        render(){

       

        return <div className='DataView'>
                <div className='heading'>Your Jobs</div>
                <div className='header'>
                        <Select value={this.state.category} onChange={(e)=> this.sort_('content', e)} options={["All content Categories"]} />
                        <Select value={this.state.industry} onChange={(e)=> this.sort_('industry', e)} options={["All Industries"]} />
                        <Select value={this.state.status} onChange={(e)=> this.sort_('status', e)} options={["Status","Revised Reques", "Editorial Review", "Completed", "Deadline Missed"]} />
                        <div className={'link'} onClick={this.clearAll}>Clear All</div>
                        <div className={'displayLabel'}>Showing {this.state.paginationCount * 8 - 7 } - {this.state.data.length > this.state.paginationCount * 8 ? this.state.paginationCount * 8 : this.state.data.length } of {this.state.data.length} Jobs</div>
                        <Select value={this.state.time} onChange={(e)=> this.sort_('time', e)} options={["Least Time Left First", "Higest Time Left First"]} />
                </div>
                <div >
                    {this.state.data.map(genJobCard).slice((this.state.paginationCount * 8) - 8 ,this.state.paginationCount * 8)}

                    <Pagination count={this.state.data.length} limit={8} counter={this.state.paginationCount} onClick={(e)=>{this.setPaginationCount(e)}}/>
                </div>
            </div>
}

}
export default DataView