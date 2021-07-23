const HomeIcons = () => {
  return (
    <section id="home-icons" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 text-center">
            <i className="fas fa-football-ball fa-3x mb-2"></i>
            <h3>Get Conferences</h3>
            <p>
              Utilizing the College Football API, you can get a list of
              conferences in College Football.
            </p>
          </div>
          <div className="col-md-4 mb-4 text-center">
            <i className="fas fa-globe fa-3x mb-2"></i>
            <h3>See Stadiums</h3>
            <p>
              Get Stadium Information, such as capacity, location, and more.
            </p>
          </div>
          <div className="col-md-4 mb-4 text-center">
            <i className="fas fa-users fa-3x mb-2"></i>
            <h3>Team Information</h3>
            <p>
              Receive information of each team, including logos, alternate logos, etc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIcons;
