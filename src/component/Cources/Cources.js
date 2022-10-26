import React from 'react';
import { FaArrowRight} from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import CouresCard from '../Home/CouresCard/CouresCard';
import './Course.css'

const Course = () => {
  const data = useLoaderData();
  // console.log(data)
  return (
    <div className='component-course'>
      <div className='cart'>
      {data.map(singleCoures => <CouresCard key={singleCoures.id} data={singleCoures}/>)}
      </div>
      <div className="right-navber">
      <h1>Learn And Expolor</h1>
      <p className='underline'></p>
        {data.map(links => <p><FaArrowRight /><Link key={links.id} to={`/course/${links.id}`}>{links.title.length < 50 ? links.title : links.title.slice(0,50) }</Link></p>)}
        </div>
    </div>
  );
};

export default Course;