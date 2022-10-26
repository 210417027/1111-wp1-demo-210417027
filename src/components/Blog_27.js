import React from 'react'

const Blog_27 = ({id, img, title, desc, category}) => {
  return (
    <div>
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
                <button type='button' className='delete-btn'> delete </button>
              </div>
            </div>
          </div>
        </article>
    </div>
  )
}

export default Blog_27
