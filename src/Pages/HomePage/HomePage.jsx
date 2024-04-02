import React from 'react';
import "../HomePage/HomePage.scss";
import bg from "../../Components/Assets/Images/bg.png";
import SearchBar from '../../Components/SearchBar/SearchBar';
import Layout from '../Layout/Layout';

const HomePage = () => {
  return (
    <>
     <Layout/>
    <div className='homePage'>
        <div className='text-container'>
            <div className='wrapper'>
            <h1 className='title'>
        Find Real Estate & Get Your Dream Place
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam illum voluptatibus nostrum possimus expedita dolor vel quae officiis omnis minima. Libero animi veniam iste porro qui quam itaque culpa! Quisquam.
        </p>
        <SearchBar/>
        <div className='boxes'>
            <div className='box'>
                <h1>16+</h1>
                <h2>Years of Experience</h2>
            </div>
            <div className='box'>
                <h1>200</h1>
                <h2>Award Gained</h2>
            </div>
            <div className='box'>
                <h1>2000+</h1>
                <h2>Property Ready </h2>
            </div>
        </div>
            </div>
        </div>
        <div className='img-container'>
            <img src={bg} />
        </div>

    </div>
    </>
  )
}


export default HomePage;