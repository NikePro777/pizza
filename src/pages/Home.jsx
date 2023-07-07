import React from 'react';

import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Categories from '../components/Categories';

const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const sortBy = document.getElementsByClassName('sort__label')[0].lastChild.textContent;
  console.log(sortBy);
  const url = new URL('https://649429cc0da866a95367498d.mockapi.io/pizzas');
  url.searchParams.append('sortBy', { sortBy });
  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setPizzas(json);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading
          ? [...new Array(6)].map((_, i) => {
              return <Skeleton key={i} />;
            })
          : pizzas.map((pizza, i) => {
              return <PizzaBlock {...pizza} key={i} />;
            })}
      </div>
    </>
  );
};

export default Home;
