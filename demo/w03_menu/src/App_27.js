import { useState } from 'react';
import Category_27 from './components/Category_27';
import './App_27.css';
import Menu_27 from './components/Menu_27';

import items from './data';


const allCategories = ['all', 'breakfast', 'lunch', 'shakes', 'dinner'];

const App_27 = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setcategories] = useState(allCategories);

  console.log('menuitems', menuItems)
  return (
    <section className="menu">
      {/* title  */}
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      {/* filter buttons */}
      <Category_27 categories={categories}/>
      {/* menu items */}
      <Menu_27 items ={menuItems} />
      </section>
  );
};

export default App_27;
