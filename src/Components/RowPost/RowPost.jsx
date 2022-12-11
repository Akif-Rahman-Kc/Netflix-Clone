import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import axios from '../../axios'
import { imageUrl , API_KEY} from "../../Constants/Constants";
import './RowPost.css'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [keyId, setKeyId]= useState('')
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            setMovies(response.data.results)
        }).catch(err=>{
            alert('Error')
        })
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };
      const handleMovie = (Id)=>{
        axios.get(`/movie/${Id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data);
            if (response.data.results.length != 0) {
                setKeyId(response.data.results[0].key)
            }else{
                alert("Video Not Available")
            }
        })
      }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
            <img onClick={()=>{handleMovie(obj.id)}} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
        )}
      </div>
      {keyId && <YouTube videoId={keyId} opts={opts}/>}
    </div>
  )
}

export default RowPost
