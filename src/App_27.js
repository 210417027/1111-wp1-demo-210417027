import { useState } from 'react';
import './App_27.css';
import Menu_27 from './components/Menu_27';

import items from './data';


const App_27 = () => {
  const [menuItems, setMenuItems] = useState(items);

  console.log('menuitems', menuItems)
  return (
    <section className="menu">
      {/* title  */}
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      {/* filter buttons */}
      <div className="btn-container">
        <div className="btn-container">
        <button type="button" className="filter-btn" data-id="all">all</button>
        <button type="button" className="filter-btn" data-id="breakfast">breakfast</button>
        <button type="button" className="filter-btn" data-id="lunch">lunch</button>
        <button type="button" className="filter-btn" data-id="shakes">shakes</button>
        <button type="button" className="filter-btn" data-id="dinner">dinner</button>
      </div>
      </div>
      {/* menu items */}
      <Menu_27 items ={menuItems} />
      </section>
  );
};

export default App_27;
