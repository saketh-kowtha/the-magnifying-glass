import React from 'react'
import './Select.scss'

const Select = (props) => {
    return <select className='selectBox' value={props.value || ''}  onChange={props.onChange}>
        {
            props.options.map(e => <option  value={e}>{e}</option>)
        }
    </select>
}

export default Select