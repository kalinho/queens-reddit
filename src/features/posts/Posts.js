import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Search from '../../components/Search'
import PostCards from './postCards/PostCards';
import './Posts.css';
import { loadPostsInSubreddit, isLoadingPosts, postsBySubreddit } from './postsSlice';

function Posts() {

  const location = useLocation();
  let subreddit = location.pathname.slice(1);
  if (subreddit === '') {
    subreddit = 'queen';
  }


    return (
      <div className='posts-component'>
        <div className='posts-header'>
          <h2>{`/${subreddit}`}</h2>
          <Search />
        </div>
        <div className='post-cards'>
          <PostCards />
        </div>
      </div>
      
    );
  
}

export default Posts;