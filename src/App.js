import React from 'react';

import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock/';
import Sort from './components/Sort';
import Skeleton from './components/PizzaBlock/Skeleton';

// import pizzas from './assets/db.json';

function App() {
  const [pizzas, setPizzas] = React.useState([]);
  React.useEffect(() => {
    fetch('https://649429cc0da866a95367498d.mockapi.io/pizzas')
      .then((res) => res.json())
      .then((json) => setPizzas(json));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {/* {pizzas.map((pizza, i) => {
              return <PizzaBlock {...pizza} key={i} />;
            })} */}

            {[...new Array(6)].map((_, i) => {
              return <Skeleton key={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
