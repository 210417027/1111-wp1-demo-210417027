import React, { useState, useEffect } from 'react';
import data from './blogData_27.js'
import BlogList_27 from './components/BlogList_27.js';

const App_27 = () => {
  const [blogs, setBlogs] = useState(data);
  console.log('blogs', blogs);
  return (
    <>
          <section className="blogs">
      <div className="section-title">
        <h2>CSS Grid using breakpoints</h2>
      </div>
      <div className="filter-container">
        <button type="button" className="filter-btn" data-id="all"> all </button>
        <button type="button" className="filter-btn" data-id="lifestyle"> lifestyle </button>
        <button type="button" className="filter-btn" data-id="travel"> travel </button></div>

      <div className="blogs-center">
        <BlogList_27 key={1} blogs={blogs}/>
        </div>
    </section>

    </>
  );
};

export default App_27;
