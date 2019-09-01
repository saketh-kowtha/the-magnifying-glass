import React from 'react'

export const NavElement = (ele, index, active) => {
    return <span className={(index === active) ? 'col active':'col'} onClick={ele.onClick}>
        {
            ele.type === 'img' 
                ? <img alt={index} src = {ele.data} />
                : <label className='title'>{ele.data}</label>
        }
    </span>
} 

