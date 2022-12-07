import { useState } from 'react';
import Category_27 from './components/Category_27';
import './App_27.css';
// import Menu_27 from './components/Menu_27';

import items from './data';
import { useMenuContext_xx } from "./MenuContext_xx";


const allCategories = ['all', 'breakfast', 'lunch', 'shakes', '27'];

const App_27 = () => {
  const { menuItems, categories, filterItems } =
  useMenuContext_xx();
  return (
    <section className="menu">
      {/* title  */}
      <div className="title">
        <h2>our menu -210417027</h2>
        <div className="underline"></div>
      </div>
      {/* filter buttons */}
      <Category_27 categories={categories}  filterItems={filterItems}/>
      {/* menu items */}
      <Menu_27 items ={menuItems} />
      </section>
  );
};

export default App_27;
