import { useEffect, useState } from 'react';
import Product_27 from '../components/Product_27';
import midterm_data_27 from '../midterm_data_27';

const P6Page_27 = () => {
  const [searchName, setSearchName] = useState('');
  const [products, setProducts] = useState(midterm_data_27);

  console.log('products', products);

  return (
    <>
      <h2>P6Page_xx</h2>
    </>
  );
};
export default P6Page_27;
