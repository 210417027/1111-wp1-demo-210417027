import React, { useState, useContext,} from 'react';

import items from './data';

const allCategories = ['all', 'breakfast', 'lunch', 'shakes', '27'];

const BlogContext_27 = React.createContext();

const BlogContextProvider_27 = ({ children }) => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (categories) => {
    if (categories === 'all') {
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => item.category === categories);
      setMenuItems(newItems);
    }
  };

  return (
    <BlogContext_27.Provider value={{ categories, menuItems, filterItems }}>
      {children}
    </BlogContext_27.Provider>
  );
};

const useBlogContext_27 = () => {
  return useContext(BlogContext_27);
};

export { BlogContextProvider_27, useBlogContext_27 };
