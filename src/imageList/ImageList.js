import React from 'react';
import './list.css';
import {Link} from 'react-router-dom'

const ImageList = (props) => {
    return (
        <div className="container">
            <div className="row">

            {
                props.images.map((image) =>{
                return (
                    <div key={image.id} className="col-md-4 images__container" style={{marginBottom:'2rem'}}>
                        <img src={image.largeImageURL} alt={image.tags} className="images__image"/>
                        < div className = "images__details" >
                            <Link to = { {
                                pathname:`/image/${image.id}`,
                                state:{image}
                            }
                            }>
                            <button className=" btn-dark" >View</button>
                            </Link>
                        
                        </div>
                    </div>
                )
                })
            }
            </div>
            
        </div>
    )
}


export default ImageList; 