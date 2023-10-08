import './App.css';
import { projects } from './projects';
import Project from './Project';
import BirthdayBuddy from './pages/01-birthday-buddy/BirthdayBuddy';
function App() {
  return (
    <>
      <section className="projectlist" id="main">
        <div className="title">
          <h2>My Project</h2>
          <div className="title-underline"></div>
        </div>
        <div className="section-center">
          {projects.map((project) => {
            const { id, img, title, path } = project;
            return (
              <a href={path} className="eGmwUG" key={id}>
                <div className="img-container">
                  <img src={img} alt={title} className="img" />
                </div>
                <footer>
                  <h5>{title}</h5>
                </footer>
              </a>
            );
          })}
        </div>
      </section>

      <BirthdayBuddy />
    </>
  );
}

export default App;
