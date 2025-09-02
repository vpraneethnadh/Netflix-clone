import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();

  const navigate = useNavigate();

  const [apidata, setApidata] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWY5YTRhYWNiNTRlY2ZlMGZhNWI1ZjNmNDQ2NWQ3MSIsIm5iZiI6MTc1NjcwMzc4NS40NjU5OTk4LCJzdWIiOiI2OGI1MmMyOWE2OTQ2ZGJhNTA1NGU2MzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.phIWj4SFSpliA93pqanjOpfKJAE6sU80TEupXcrbdAc'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApidata(res.results[0]))
    .catch(err => console.error(err));
  },[])

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="back" onClick={() => {navigate(-1)}}/>
      <iframe 
        width="90%" 
        height="90%" 
        src={`https://www.youtube.com/embed/${apidata.key}`} 
        title="trailer" 
        frameBorder="0" 
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apidata.published_at.slice(0,10)}</p>
        <p>{apidata.name}</p>
        <p>{apidata.type}</p>
      </div>
    </div>
  )
}

export default Player
