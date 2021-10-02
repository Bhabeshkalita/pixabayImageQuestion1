import React from 'react' ;
import style from './searchBar.module.scss'

const SearchBar = ({handleChange , search}) => {
    console.log(search)
    return(
        <div className={style.searchbar}>
            <input type='text' placeholder='search' onChange={e=>handleChange(e.target.value)} value={search} />
        </div>
    )
}
export default SearchBar ;