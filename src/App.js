import React , {Component} from 'react';
import ImageSearch from './imageSearch/ImageSearch'
import ImageList from './imageList/ImageList'

const API_KEY = '15156748-1235162a32094725089bb00ba';



class App extends Component  {

  state = {
    images:[],
    error: null
  }

  handleGetReq = async (e) => {
    e.preventDefault()

    const searchTerm = e.target.elements.searchValue.value 
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`
    const request = await fetch(URL)
    const data = await request.json();
    if(!searchTerm){
      this.setState({error:"please provide a value."})
    }else{
 this.setState({
      images: data.hits ,
      error:null
    })
    }
    
  }

 
  
  render () {
  return (
    <div className="container">
    <ImageSearch handleGetReq={this.handleGetReq} />

    {
      this.state.error !== null ?  
    <div style={{color:"white" , textAlign:"center"}}>{this.state.error}</div> :
    <ImageList images={this.state.images}/>

    }
    </div>
  )
  }
}

export default App;
