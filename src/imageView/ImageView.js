import React from 'react';
import {link, Link} from 'react-router-dom'

const ImageView = (props) => {
   const {largeImageURL : image, tags , user : owner , pageURL} = props.location.state.image;


    return (
        <div className="col-md-8">
             
           <img src={image} alt={tags}/>
           <p>&copy;pixbay</p>
           <h4>Credit: <span>{owner}</span></h4>
           <h4>Download:<span><a target="_blank" href={pageURL}>Go to download</a></span></h4>
           <button className="btn btn-danger"><Link to="/">Home</Link></button>
        </div>
    )
}

export default ImageView

