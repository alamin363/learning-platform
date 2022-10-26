import React from 'react';
import { useContext } from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
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
    <div className='btn-div'>
    <Link className='btn-home' to='/login'>Get Permission To Access <FaArrowAltCircleRight /></Link>
    </div>
    </>
  );
};

export default Home;