import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../context/Context';

const Home = () => {
  const data = useLoaderData()
  console.log(data)
  const {name} = useContext(authContext);

  return (
    <div>
      {data.map(singleData => <h1>{singleData.Instructor}</h1>)}
    </div>
  );
};

export default Home;