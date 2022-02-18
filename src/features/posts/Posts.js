import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Search from '../../components/Search'
import PostCards from './postCards/PostCards';
import './Posts.css'

function Posts() {

  const location = useLocation();
  const cat = location.pathname;

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [location])

  return (
    <div className='posts-component'>
      <div className='posts-header'>
        <h2>{ `r${cat}` }</h2>
        <Search />
      </div>
      <div className='post-cards'>
        <PostCards />
      </div>
    </div>
    
  );
}

export default Posts;