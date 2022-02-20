import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Posts from '../features/posts/Posts';
import CommentsPage from '../features/posts/commentsPage/CommentsPage'
import Categories from '../features/categories/Categories';

function App() {

  

  return (
    <Router>
      <h1>Queen's Reddit</h1>
      <div className='app'>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/:category" element={<Posts />} />
          <Route path="/comments/:id" element={<CommentsPage />} />
        </Routes>
        <Categories />
      </div>
    </Router>
  );
}

export default App;
