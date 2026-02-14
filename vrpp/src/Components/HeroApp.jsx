import { useState } from "react";
import HeroCard from "./HeroCard";
import HeroList from "./HeroList";


function HeroApp() {
  let [hCard, setHCard] = useState({});

  function selectList(val) {
    setHCard(val);
  }
  return (
    <>
      <div className="container m-auto mt-4">
        <div className="row">
          <h1>Hero's App</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
            nobis dolore laborum in similique illum velit voluptatibus libero
            aperiam odio ipsa, voluptas quis consequatur, voluptates dignissimos
            quo. Sapiente, architecto officia.
          </p>
        <div>
          <button className="btn btn-success">Click</button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-8">
          <HeroList selectList={selectList} />
        </div>
        <div className="col-4">
          <HeroCard selectCard={hCard} />
        </div>
        </div>
      </div>
    </>
  );
}

export default HeroApp;
