import { useState } from 'react';
import './app.css';
import { data } from './data';

const BirthdayBuddy = () => {
  const [persons, setPerson] = useState(data);

  const handlerClick = () => {
    setPerson([]);
    console.log(persons.length);
  };

  return (
    
    <main id="birthdaybuddy">
      <h1>Birthday Buddy</h1>
      <section className="container">
        <h3>{persons.length} Birthdays Today</h3>
        <section>
          {persons.map((person) => {
            const { id, name, age, image } = person;
            return (
              <article className="person" key={id}>
                <img src={image} alt="" className="img" />
                <div>
                  <h4>{name}</h4>
                  <p>{age} years</p>
                </div>
              </article>
            );
          })}
        </section>
        <button type="button" className="btn btn-block" onClick={handlerClick}>
          Clear All
        </button>
      </section>
      <a href="#main" className="btn mainpage">
        Main Page
      </a>
    </main>
  );
};
export default BirthdayBuddy;
