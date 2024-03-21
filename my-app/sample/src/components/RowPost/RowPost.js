import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import './RowPost.css'
import {API_KEY,imageUrl} from '../../constants/constants'
function RowPost(props) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
   axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(response => {  //link is replaced with props url
    console.log(response.data);
    setMovies(response.data.results)     //set the movies
   }).catch(err=>{
   // alert('Network Error')
   })
  }, [])
  return (
    <div className='row'>
        <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>{                   //created mapobj to display movies that have been set in setMovies
        <img className={ props.isSmall ? 'smallposter' : 'post'} alt ='post' src={`${imageUrl+obj.backdrop_path}`}/>


        }
        )}
        
        

      </div>
    </div>
  )
}

export default RowPost

