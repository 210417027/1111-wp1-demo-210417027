import React, { useState, useContext } from 'react';
import data from './blogData_xx';
import BlogList_xx from './components/BlogList_xx';
import Alert_xx from './components/Alert_xx';

const BlogContext_xx = React.createContext();


const BlogContextProvider_xx = ({children}) => {
  const [blogs, setBlogs] = useState(data);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });  

  const removeItem = (id) => {
    showAlert(true, 'blog removed', 'danger');
    setBlogs(blogs.filter( (blog) => blog.id !== id));
  }

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  console.log('blogs', blogs);

  const clearBlogs = () => {
    showAlert(true, 'empty all blogs', 'danger');
    setBlogs([]);
  }

  const filterItems = (category) => {
    if(category === 'all') {
      setBlogs(data);
    } else {
      const newBlogs = data.filter( (blog) => blog.category === category); 
      setBlogs(newBlogs);
    }
  }
  return (
    <BlogContext_xx.Provider value={ {blogs, alert, removeItem , clearBlogs, filterItems, showAlert}}>
    {children}
    </BlogContext_xx.Provider>
  );
};

const useBlogContext_xx = () => {
  return useContext(BlogContext_xx);
};

export { BlogContextProvider_xx, useBlogContext_xx};
