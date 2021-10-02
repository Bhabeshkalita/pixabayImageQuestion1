import React from 'react' ;
import style from './imageGalery.module.scss'

const ImageGalery = (props) => {
    console.log(props)
    return(
        <div className={style.image}>
            {props.image?.map(res=>
                <a href={res.largeImageURL} > <img src={res.previewURL} alt={res.pageURL} key={res.id} /> </a>)
                }
        </div>
    )
}

export default ImageGalery ;