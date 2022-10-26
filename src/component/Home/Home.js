import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../context/Context';
import Headers from '../Header/Header'
import CouresCard from './CouresCard/CouresCard';
import './Home.css'
const Home = () => {
  const data = useLoaderData()
  const {name} = useContext(authContext);

  return (
    <>
    <Headers />
    <div className='home-component'>
      {data.map(singleCoures => <CouresCard key={singleCoures.id} data={singleCoures}/>)}
    </div>
    </>
  );
};

export default Home;