import React from 'react'
import './jobCard.scss'
import star from '../assests/Star.svg'
import time from '../assests/Time.svg'

const getStatusInfo = (ele) => {
    let colors = {
        "Revised Request" : {color: '#44B5DD', icon: time},
        "Editorial Review" :  {color: '#F5A853', icon: time},
        "Completed": {color: '#3EBCB3', icon: star},
        "Deadline Missed": {color: '#F25C69', icon: star}
    }
    return colors[ele]
}

const genJobCard = (ele) => {
    let info = getStatusInfo(ele.status)
    let btnType = info.color === "#44B5DD" ? 'Revise' : 'View'
    return <div className={"Jobcard" } style={{borderLeft: '2px solid '+ info.color}}>
            <div className="badge" style={{backgroundColor: info.color}}>{ele.status}</div>
            <div className='title'>{ele.title}<br/> {ele.subtitle}</div>
            <div className='amount'><b>₹{ele.amount}</b></div>
            <div className="time"><img alt='' src={info.icon} />{ele.time}</div>
            <div className="btn"><button className={btnType}>{btnType}</button></div>
</div>
}

export default genJobCard