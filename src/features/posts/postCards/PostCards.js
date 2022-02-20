import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { isLoadingPosts, loadPostsInSubreddit, postsBySubreddit } from '../postsSlice';
import './PostCards.css';

function PostCards() {

  const location = useLocation();
  let subreddit = location.pathname.slice(1);
  if (subreddit === '') {
    subreddit = 'queen';
  };
  const postsAreLoading = useSelector(isLoadingPosts);
  const posts = useSelector(postsBySubreddit);
  const postsInSubreddit = posts[subreddit];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostsInSubreddit(subreddit));
    window.scrollTo({ top: 0 });
  }, [subreddit, dispatch]);

  if (postsAreLoading) return <div>Loading posts...</div>;
  if (!postsInSubreddit) return null;

  return (
    <div>
      {postsInSubreddit.map((post) => {
        return (
        <div className='post-card'>
          <div className='post-header'>
            <h3>{post.title}</h3>
            <p>Posted by {post.author}</p>
          </div>
          <div className='post-body'>
            <p>{post.content}</p>
            <img src={post.url} onError={(e) => e.target.style.display="none"} />
          </div>
        </div>)
      })}
    </div>
  );
}

export default PostCards;