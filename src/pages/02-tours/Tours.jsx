import { useState, useEffect } from 'react';

import Loading from './Loading';
import TourList from './TourList';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //remove tours
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id != id));
  };

  //fetch data from URL
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);

      if (!resp.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      const tours = await resp.json();
      setTours(tours);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  //Use Effect for FetchData
  useEffect(() => {
    fetchData();
  }, []);

  //check loading
  if (isLoading) {
    return (
      <main id="tours">
        <Loading />
      </main>
    );
  }

  //check Error
  if (isError) {
    return (
      <main id="tours">
        <h4 className="alert-danger alert">Unable to load Tours</h4>
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main id="tours">
        <div className="title">
          <h2>No Tours Left</h2>
          <div className="title-underline"></div>

          <button
            type="button"
            className="btn"
            style={{ marginTop: '3rem' }}
            onClick={() => fetchData()}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main id="tours">
      <TourList tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
