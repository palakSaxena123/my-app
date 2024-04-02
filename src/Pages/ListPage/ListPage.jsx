import React from 'react';
import "../ListPage/ListPage.scss";
import { listData } from '../../lib/dummydata';
import Filter from '../../Components/Filter/Filter';
import Card from '../../Components/Card/Card';
import Navbar from "../../Components/Navbar/Navbar";
import Map from '../../Components/Map/Map';

const ListPage = () => {
     const data = listData;
  return (
    <>
    <Navbar/>
    <div className='listPage'>
        <div className='list-container'>
        <div className='wrapper'>
            <Filter/>
     
        {data.map((item)=>{
            return <Card key={item.id} item= {item}/>
        })}

        </div>
        </div>
        <div className='map-container'>
           <Map items = {data}/>
        </div>

    </div>
    </>
  )
}

export default ListPage;