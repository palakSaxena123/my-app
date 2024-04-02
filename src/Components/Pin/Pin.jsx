import React from 'react';
import { Marker , Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import "../Pin/Pin.scss";


const Pin = ({item}) => {
  return (
    <Marker position={[item.latitude , item.longitude]}>
      <Popup>
         <div className='popup-container'>
            <img src= {item.img} />
            <div className='text-container'>
                <Link to={`/${item.id}`}>{item.title}</Link>
                <spna>{item.bedroom} bedroom</spna>
                <b>$ {item.price}</b>
            </div>
         </div>
      </Popup>
    </Marker>
  )
}

export default Pin;