import axios from 'axios';
import React, { useEffect, useState } from 'react' ;
import ImageGalery from '../Component/image/imageGalery';
import Pagination from '../Component/pagination/pagination';
import SearchBar from '../Component/searchbar/searchBar';
const API_KEY = '23662233-dea1fdd42d77fb013a23668a3' ;
const HomePage = () => {
    const [image , setImage] = useState();
    const [page , setPage] = useState(1);
    const [search , setSearch] = useState('')

    const prevPageHandler = () => {
        if(page === 1){
            return 
        }
        return setPage(prev=> prev-1)
    }
    const nextPageHandler = () => {
        return setPage(prev=> prev+1)
    }

    useEffect(()=>{
        axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=10&page=${page}&q=${search}`)
        .then((res)=>{setImage(res.data.hits)})
        .catch(err=>console.warn(err))
    },[search , page])

    
    
    return(
        <div>
            <SearchBar handleChange={setSearch} search={search}/>
            <ImageGalery image = {image}/>
            <Pagination prev={prevPageHandler} next={nextPageHandler} page={page}/>
        </div>
    )
}

export default HomePage ;