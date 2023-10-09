import './reviews.css';
import reviews from './review-data';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = reviews[index];

  const checkNumber = (number) => {
    if (number >= reviews.length) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((currenIndex) => {
      // const newIndex = currenIndex + 1;
      // return checkNumber(newIndex);
      const newIndex = (currenIndex + 1) % reviews.length;
      return newIndex;
    });
  };
  const nextPerson = () => {
    setIndex((currenIndex) => {
      // const newIndex = currenIndex - 1;
      // return checkNumber(newIndex);
      const newIndex = (currenIndex - 1 + reviews.length) % reviews.length;
      return newIndex;
    });
  };

  const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
  };

  const randonPerson = () => {
    let newIndex = getRandomNumber(reviews.length);
    if (newIndex === index) {
      newIndex += 1;
    }
    //setIndex(checkNumber(newIndex));
    setIndex(newIndex % reviews.length);
  };

  return (
    <main id="reviews">
      <article className="review">
        <div className="img-container-reviews">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>

          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>

        <button className="btn btn-hipster" onClick={randonPerson}>
          surprise me
        </button>
      </article>
    </main>
  );
};
export default Reviews;
