import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CouresCard from '../Home/CouresCard/CouresCard';
import './Course.css'

const Course = () => {
  const data = useLoaderData();
  // console.log(data)
  return (
    <div className='component-course'>
      <div>
      {data.map(singleCoures => <CouresCard key={singleCoures.id} data={singleCoures}/>)}
      </div>
      <div className="right-navber">
        {data.map(links => <p><Link key={links.id} to={`/course/${links.id}`}>{links.title.length < 50 ? links.title : links.title.slice(0,50) }</Link></p>)}
        </div>
    </div>
  );
};

export default Course;