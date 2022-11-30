import React, { useState, useContext } from 'react';

const PersonContext = React.createContext();


const Blog_xx = ({id, img, title, desc, category}) => {
  const { removeItem } = useContext(PersonContext);

  return (
    <article className="blog">
    <img
      src={img}
      alt="Coffee photo"
      className="img blog-img"
    />
    <div className="blog-content">
      <span>{category}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="item-control">
        <a href="#">read more</a>
        <div className='btn-container'>
          <button type='button' className='delete-btn' onClick={ () => removeItem(id)}> delete </button>
        </div>
      </div>
    </div>
  </article>
  )
}

export default Blog_xx
