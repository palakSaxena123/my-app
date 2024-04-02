import React from 'react';
import "../ListPage/ListPage.scss";
import { listData } from '../../lib/dummydata';
import Filter from '../../Components/Filter/Filter';
import Card from '../../Components/Card/Card';
import Map from '../../Components/Map/Map';
import Layout from '../Layout/Layout';

const ListPage = () => {
     const data = listData;
  return (
    <>
    <Layout/>
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