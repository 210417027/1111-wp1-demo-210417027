import React, { useState, useContext } from 'react';
import items from './data';

const MenuContext_xx = React.createContext();

const MenuContextProvider_xx = ({children}) => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(items);
    } else {
      const newItems = items.filter( (item) => item.category ===category);
      setMenuItems(newItems);
    }
  }

  console.log('menuitems', menuItems)

}

export default MenuContextProvider_xx;
