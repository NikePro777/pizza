import React from 'react';

import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Categories from '../components/Categories';

const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  let [url, setUrl] = React.useState(new URL('https://649429cc0da866a95367498d.mockapi.io/pizzas'));

  const editUrl = function (activeCategory, sortStatus) {
    console.log('activeCategory', activeCategory, 'sortStatus', sortStatus);
    let url = new URL('https://649429cc0da866a95367498d.mockapi.io/pizzas');
    url.searchParams.append('category', activeCategory);
    // fetch(url, {
    //   method: 'GET',
    //   // headers: { 'content-type': 'application/json' },
    // })
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setPizzas(json);
    //     console.log(pizzas);
    //     setLoading(false);
    //   });
    console.log(url);
    setUrl(url);
  };

  // setUrl = (activeCategory, sortStatus) => {
  //   console.log('activeCategory', activeCategory, 'sortStatus', sortStatus);
  //   let nurl = new URL('https://649429cc0da866a95367498d.mockapi.io/pizzas');
  //   nurl.searchParams.append('category', activeCategory);
  //   // fetch(url, {
  //   //   method: 'GET',
  //   //   // headers: { 'content-type': 'application/json' },
  //   // })
  //   //   .then((res) => res.json())
  //   //   .then((json) => {
  //   //     setPizzas(json);
  //   //     console.log(pizzas);
  //   //     setLoading(false);
  //   //   });
  //   console.log(nurl);
  //   return nurl;
  // };

  // category
  const [activeCategory, setActiveCategory] = React.useState(0);
  function setSelectCategory(select) {
    setActiveCategory(select);
    editUrl(activeCategory, sortStatus);
  }

  //sort
  let [sortStatus, setSortStatus] = React.useState(0);
  const setStatus = (sortId) => {
    setSortStatus(sortId);
    editUrl(activeCategory, sortStatus);
  };

  //url
  React.useEffect(() => {
    console.log('работает?!');
    fetch(url, {
      method: 'GET',
      // headers: { 'content-type': 'application/json' },
    })
      .then((res) => res.json())
      .then((json) => {
        setPizzas(json);
        // console.log(pizzas);
        setLoading(false);
      });
  }, [url]);

  return (
    <>
      <div className="content__top">
        <Categories activeCategory={activeCategory} selectCategory={setSelectCategory} />
        <Sort setSortStatus={setStatus} sortStatus={sortStatus} />
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
