import React from 'react';
import "../Card/Card.scss";
import {Link} from "react-router-dom";
import pin from "../Assets/Images/pin.png";
import bed from "../Assets/Images/bed.png";
import bath from "../Assets/Images/bath.png";
import save from "../Assets/Images/save.png";
import chat from "../Assets/Images/chat.png";

const Card = ({item}) => {
  return (
    <div className='card'>
      <Link  to = {`/${item.id}`} className='img-container'>
        <img src={item.img}/>

      </Link>
      <div className='text-container'>
        <h2 className='title'>
          <Link  to = {`/${item.id}`} >{item.title} </Link>
        </h2>
        <p className='address'>
          <img src={pin}/>
          <span>{item.address}</span>

        </p>
        <p className='price'>${item.price}</p>
        <div className='bottom'>
          <div className='features'>
            <div className='feature'>
              <img src= {bed} />
              <span>{item.bedroom} badroom</span>
            </div>

            <div className='feature'>
              <img src= {bath} />
              <span>{item.bathroom} badroom</span>
            </div>
          </div>
          <div className='icons'>
            <div className='icon'>
              <img src = {save} />
            </div>
            <div className='icon'>
              <img src = {chat} />
            </div>
          </div>

        </div>

      </div>
   
        
    </div>
  )
}

export default Card;