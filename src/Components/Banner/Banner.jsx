import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from "../../Constants/Constants";
import axios from '../../axios'
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState([])
    useEffect(()=>{
        let rand = Math.floor(Math.random() * 20)
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovie(response.data.results[rand])
        })
    }, [])
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path: ""})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner
