import React from 'react' ;
import style from  './pagination.module.scss'

const Pagination = ({prev , next , page}) => {
    
    return(
        <div className={style.pagination}>
            <h1>page {page}</h1>
            <button onClick={()=>{prev()}}><i class="fa fa-arrow-left" aria-hidden="true"></i> prev</button>
            <button onClick={()=>{next()}}>next <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
        </div>
    )
}

export default Pagination ;