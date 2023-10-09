import { useState } from 'react';
import './app.css';
import { data } from './data';

const BirthdayBuddy = () => {
  const [persons, setPerson] = useState(data);

  const handlerClick = () => {
    setPerson([]);
  };

  return (
    <main id="birthdaybuddy">
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
    </main>
  );
};
export default BirthdayBuddy;
