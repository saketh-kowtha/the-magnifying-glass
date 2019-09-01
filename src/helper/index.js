import React from 'react'

export const NavElement = (ele, index, active) => {
    return <span className={(index === active) ? 'col active':'col'} onClick={ele.onClick}>
        {
            ele.type === 'img' 
                ? <div><img alt={index} src = {ele.data} />
                    {(ele.badges) ? <span style={{position:'absolute', marginTop: '-5px', marginLeft: '-10px', fontSize: '10px', backgroundColor: 'red', color: 'white', fontWeight: 'bold', padding:'1px 5px',borderRadius:'10px'}}>{ele.badges}</span>:''}
                </div>
                : <label className='title'>{ele.data}</label>
        }
    </span>
} 

