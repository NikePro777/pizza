import React from 'react';

const Categories = ({ activeCategory, selectCategory }) => {
  console.log('activeCategory', activeCategory);
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => {
          return (
            <li
              onClick={() => selectCategory(index)}
              key={index}
              className={activeCategory === index ? 'active' : ''}>
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
