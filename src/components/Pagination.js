import React from 'react'
import './Pagination.scss'

const Pagination = (props) => {
    let limit = Math.ceil(props.count / props.limit)
        
    return <div class="pagination">
      <a onClick={ () => props.onClick((props.counter - 1) || 1)}>&laquo;</a>
      {
          (Array.from(Array(limit))).map((e, index) => <a onClick={()=> { 
            if(props.counter != index + 1)
                props.onClick(index+1) 
            }}>{index + 1}</a>)
      }
      <a onClick={() => {
          if(props.counter != limit)
            props.onClick((props.counter + 1))}
        }>&raquo;</a>
    </div>
}

export default Pagination