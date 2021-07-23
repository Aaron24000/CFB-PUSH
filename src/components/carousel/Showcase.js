import '../../index.scss';

const Slideshow = () => {
    return (
      <header id="home-showcase">
        <div className="darker-overlay">
          <div className="home-inner container pt-5">
            <div className="row">
              <div className="col-lg-8 d-block text-white">
                <h1  className="display-4">
                  Search College Football Data and see team information
                </h1>
                <div className="d-flex">
                  <div className="p-4 align-self-start">
                    <i className="fas fa-chart-bar fa-2x"></i>
                  </div>
                  <div className="p-4 align-self-end">
                  See all of the conferences across the NCAA
                  </div>
                </div>
                <div className="d-flex">
                  <div className="p-4 align-self-start">
                    <i className="fas fa-chart-bar fa-2x"></i>
                  </div>
                  <div className="p-4 align-self-end">
                  Search stadiums across 50 states and 30+ conferences!
                  </div>
                </div>
                <div className="d-flex">
                  <div className="p-4 align-self-start">
                    <i className="fas fa-chart-bar fa-2x"></i>
                  </div>
                  <div className="p-4 align-self-end">
                  Get team info on individual teams, including team logos!
                  </div>
                </div>
              </div>
              <div className="col-lg-4 aggie-photo">
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };

export default Slideshow;
