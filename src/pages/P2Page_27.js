import { useState } from 'react';
import midterm_data_27 from '../midterm_data_27';

const P2Page_27 = () => {
  const [products, setProducts] = useState(midterm_data_27);
  console.log('products', products);
  return (
    <>
      <section className="main-section">
      <div className="filter-left">
        <div className="left-content">
            <form className="input-form">
              <input type="text" className="search-input" placeholder="search..." />
            </form>
            <h4>Company</h4>
            <article className="companies">
              <button className="company-btn">all</button>
              <button className="company-btn">ikea</button>
              <button className="company-btn">marcos</button>
              <button className="company-btn">caressa</button>
            </article>
          </div>
        </div>
      <div className="products-right">
        <div className="products-container">
          { midterm_data_27.map((midterm_data_27) => {
            const {id, img, category, name ,price} = midterm_data_27;
            return (
              <div key={id} className="single-product">
              <img src={img} className="single-product-img img" alt="albany table" />
              <footer>
                <h5 className="name">{name}</h5>
                <span className="price">{price}</span>
              </footer>
            </div>
            )

          })}
            

            
      </div>
      </div>
    </section>
    </>
  );
};
export default P2Page_27;
