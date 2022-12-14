import { useState } from 'react';
import Menu_27 from './components/Menu_27';
import Categories_27 from './components/Categories_27';


import { useBlogContext_27 } from './BlogContext_27';


const App_27 = () => {
  const { categories, menuItems, filterItems } = useBlogContext_27();

  console.log('categories', categories);
  console.log('menuItems', menuItems);
  return (
    <section className="menu">
      {/*title*/}
      <div className="title">
        <h2>Our Menu 210417027</h2>
        <div className="underline"></div>
      </div>
      {/* filter buttons */}
      <Categories_27 categories={categories} filterItems={filterItems} />
      {/* menu items*/}
      <Menu_27 items={menuItems} />
    </section>
  );
};

export default App_27;
