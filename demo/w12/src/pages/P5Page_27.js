import { useEffect, useState } from "react";
import Alert_27 from "../components/Alert_27";
import Product_27 from "../components/Product_27";
import midterm_data_27 from "../midterm_data_27";

const P5Page_27 = () => {
  const [products, setProducts] = useState(midterm_data_27);

  console.log("products", products);

  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const clearAllProducts = () => {
    showAlert(true, "all products delete", "danger");
    setProducts([]);
  };

  const fetchAllProducts = () => {
    // showAlert(true, 'empty all blogs', 'danger');
    setProducts(midterm_data_27);
  };

  const filterItems = (category) => {
    if (category === "all") {
      setProducts(midterm_data_27);
    } else {
      const newProducts = midterm_data_27.filter(
        (product) => product.category === category
      );
      setProducts(newProducts);
    }
  };

  return (
    <>
      <section className="main-section">
        <div className="filter-left">
          <div className="left-content">
            <form className="input-form">
              <input
                type="text"
                className="search-input"
                placeholder="search..."
              />
            </form>
            <h4>Company</h4>
            <article className="companies">
              <button
                className="company-btn"
                onClick={() => filterItems("all")}
              >
                all
              </button>
              <button
                className="company-btn"
                onClick={() => filterItems("ikea")}
              >
                ikea
              </button>
              <button
                className="company-btn"
                onClick={() => filterItems("marcos")}
              >
                marcos
              </button>
              <button
                className="company-btn"
                onClick={() => filterItems("caressa")}
              >
                caressa
              </button>
            </article>
            <button className="clear-btn" onClick={clearAllProducts}>
              clear all
            </button>
            <button className="fetch-btn" onClick={fetchAllProducts}>
              fetch all
            </button>
          </div>
        </div>
        {alert.show && <Alert_27 {...alert} removeAlert={showAlert} />}
        <div className="products-right">
          <div className="products-container">
            {products.map((midterm_data_27) => {
              const { id, img, category, name, price } = midterm_data_27;
              return (
                <Product_27
                  key={id}
                  img={img}
                  name={name}
                  category={category}
                  price={price}
                  products={products}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default P5Page_27;
