import React from 'react';

const Categories = () => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [active, setActive] = React.useState(0);

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => {
          return (
            <li
              onClick={() => setActive(index)}
              key={index}
              className={active === index ? 'active' : ''}>
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
