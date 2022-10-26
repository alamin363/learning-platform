import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CouresCard from '../Home/CouresCard/CouresCard';
import './Course.css'

const Course = () => {
  const data = useLoaderData();
  // console.log(data)
  return (
    <div className='component-course'>
      {data.map(singleCoures => <CouresCard key={singleCoures.id} data={singleCoures}/>)}
    </div>
  );
};

export default Course;