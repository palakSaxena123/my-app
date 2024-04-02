import React from 'react';
import "./SinglePage.scss";
import Slider from '../../Components/Slider/Slider';
import Navbar from '../../Components/Navbar/Navbar';

const SinglePage = () => {
  return (
    <>
    <Navbar/>
    <div className='singlePage'>
        <div className='details'>
         <div className='wrapper'>
            <Slider/>
         </div>
        </div>
        <div className='features'>
        <div className='wrapper'></div>
        </div>
    </div>
    </>
  )
}

export default SinglePage;