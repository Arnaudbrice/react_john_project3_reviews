import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { BsQuote } from "react-icons/bs";

import data from "./data";

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [people, setPeople] = React.useState(data);

  const handleLeftClick = () => {
    setIndex(prev => {
      return (prev - 1 + people.length) % people.length;
    });
    console.log(index);
  };
  const handleRightClick = () => {
    /*  setIndex(prev => {
      if (prev === people.length - 1) {
        return 0;
      }
      return prev + 1;
    }); */

    setIndex(prev => {
      return (prev + 1) % people.length;
    });
    console.log(index);
  };

  const handleButtonClick = () => {
    let random;

    /* as long as the random is the same as the current index, it will create a new random. This will keep happening until the random index is not the same as the current index */
    do {
      random = Math.floor(Math.random() * people.length);
    } while (random === index); // Ensure the new random index is not the same as the current index

    setIndex(random);
  };

  return (
    <div className="main">
      <div className="review">
        <div className="img-container">
          <img
            className="person-img"
            src={people[index].image}
            alt={people[index].name}
          />

          <BsQuote className="quote-icon" />
        </div>

        <h3 className="author">{people[index].name}</h3>
        <p className="job">{people[index].job}</p>
        <p className="info">{people[index].text}</p>

        <div className="btn-container">
          <SlArrowLeft className="prev-btn" onClick={handleLeftClick} />
          <SlArrowRight className="next-btn" onClick={handleRightClick} />
        </div>

        <button className="btn" onClick={handleButtonClick} type="button">
          Surprise Me
        </button>
      </div>
    </div>
  );
};
export default App;
