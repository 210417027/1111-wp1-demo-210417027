import { useState } from 'react';
import Product_27 from '../components/Product_27';
import midterm_data_27 from '../midterm_data_27';

const P3Page_27 = () => {
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
              <Product_27 key={id} img={img} name={name} category={category} price={price} products={products} />

            )  
            })} 
      </div>
      </div>
    </section>
    </>
  );
};
export default P3Page_27;
