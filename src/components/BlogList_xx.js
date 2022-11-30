import React, { useState, useContext } from 'react';
import Blog_xx from './Blog_xx';


const PersonContext = React.createContext();

const BlogList_xx = ({blogs, removeItem})  => {
  const mainData = useContext(PersonContext);
  console.log('MainData', mainData)
  return (
    <div className="blogs-center">
        { blogs.map( (blog) => {
           const {id, img, title, desc, category} = blog;
           return (
            <Blog_xx key={id} id={id} img={img} title={title} desc={desc} category={category} removeItem={removeItem}/>
           )
        }) }
      </div>
  )
}

export default BlogList_xx
