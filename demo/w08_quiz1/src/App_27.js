import React, { useState, useEffect } from 'react';
import data from './blogData_27.js'
import BlogList_27 from './components/BlogList_27.js';
import Alert_27 from './components/Alert_27.js';

const App_27 = () => {
  const [blogs, setBlogs] = useState(data);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });


  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({show, msg, type });
  };

  const removeItem = (id) => {
    showAlert(true, 'blog removed', 'danger');
    setBlogs(blogs.filter( (blog) => blog.id !==id));
  }

  const clearBlogs = () => {
    showAlert(true, 'empty all blogs', 'danger');
    setBlogs([]);
  }

  const filterItems = (category) => {
    if(category === 'all'){
      setBlogs(data);
    } else {
      const newBlogs = data.filter((blog) => blog.category === category);
      setBlogs(newBlogs);
    }
  }


  return (
    <>
          <section className="blogs">
          { alert.show && <Alert_27 {...alert} removeAlert={showAlert} />}

      <div className="section-title">
        <h2>CSS Grid using breakpoints</h2>
      </div>
      <div className="filter-container">
        <button type="button" className="filter-btn" data-id="all" onClick={() =>filterItems('all')}> all </button>
        <button type="button" className="filter-btn" data-id="lifestyle" onClick={() =>filterItems('lifestyle')}> lifestyle </button>
        <button type="button" className="filter-btn" data-id="travel" onClick={() =>filterItems('travel')}> travel </button></div>

      <div className="blogs-center">
        <BlogList_27 key={1} blogs={blogs} removeItem={removeItem}/>
        </div>
        <button class='clear-btn' onClick={clearBlogs}>
        clear all blogs
      </button>
    </section>

    </>
  );
};

export default App_27;
