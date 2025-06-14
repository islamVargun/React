import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.webp";
import Bootstrap from "./images/bootstrap.webp";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-4 mb-5">
        <a className="navbar-brand" href="#">
          Kurslarım
        </a>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-4 mb-4">
            <div className="card">
              <img
                src={Angular}
                className="card-img-top"
                alt="Angular"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Angular</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis nisi minus, deleniti voluptatibus quod reiciendis
                  fuga ipsa alias ipsum dolor sit amet consectetur adipisicing
                  elit. Perferendis nisi minus, deleniti voluptatibus quod
                  reiciendis fuga ipsa alias ipsum dolor sit amet consectetur
                  adipisicing elit. Perferendis nisi minus, deleniti
                  voluptatibus quod reiciendis fuga ipsa alias?
                </p>
              </div>
            </div>
          </div>

          <div className="col-4 mb-4">
            <div className="card">
              <img
                src={Bootstrap}
                className="card-img-top"
                alt="Bootstrap"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Bootstrap</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis nisi minus, deleniti voluptatibus quod reiciendis
                  fuga ipsa alias ipsum dolor sit amet consectetur adipisicing
                  elit. Perferendis nisi minus, deleniti voluptatibus quod
                  reiciendis fuga ipsa alias ipsum dolor sit amet consectetur
                  adipisicing elit. Perferendis nisi minus, deleniti
                  voluptatibus quod reiciendis fuga ipsa alias?
                </p>
              </div>
            </div>
          </div>

          <div className="col-4 mb-4">
            <div className="card">
              <div className="card-shadow">
                <img
                  src={Angular}
                  className="card-img-top"
                  alt="React"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">React</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis nisi minus, deleniti voluptatibus quod
                    reiciendis fuga ipsa alias ipsum dolor sit amet consectetur
                    adipisicing elit. Perferendis nisi minus, deleniti
                    voluptatibus quod reiciendis fuga ipsa alias ipsum dolor sit
                    amet consectetur adipisicing elit. Perferendis nisi minus,
                    deleniti voluptatibus quod reiciendis fuga ipsa alias?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
