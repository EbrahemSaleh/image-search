import React from 'react';


const ImageSearch = ({handleGetReq}) => {

    return(
        <div className = "my-5" >
            <form onSubmit={handleGetReq}>
                <input className = "form-control"
                type = "text"
                autoComplete = "off"
                name = "searchValue"
                placeholder = "Search images.." />
                <button className = "btn btn-outline-secondary btn-block mt-1"> Search</button>
             </form>
        </div>
    )
}


export default ImageSearch