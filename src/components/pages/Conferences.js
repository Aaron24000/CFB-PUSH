import axios from "axios";
import { useState, useEffect } from "react";
import tokenData from "../../config.json";
import { Fragment } from "react";

const Conferences = () => {
  const [state, setState] = useState([]);
  //   const { name, short_name, abbreviation } = state;

  useEffect(() => {
    axios
      .get("/conferences", {
        headers: {
          contentType: "application/json",
          Authorization: `Bearer ${tokenData.API_KEY}`,
        },
      })
      .then((response) => {
        setState(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Fragment>
      <header id="conferences-header" className="py-2 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>
                <i className="fas fa-football-ball mb-2"></i> Conferences
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Conferences table */}
      <section id="conferences">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <h4>List Of Conferences</h4>
                </div>
                <table className="table table-striped">
                  <thead className="table-dark">
                    <tr>
                      <th>Name</th>
                      <th>Short Name</th>
                      <th>Abbreviation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state
                      .sort(function (a, b) {
                        if (a.name.toLowerCase() < b.name.toLowerCase())
                          return -1;
                        if (a.name.toLowerCase() > b.name.toLowerCase())
                          return 1;
                        return 0;
                      })
                      .map((conferences, i) => (
                        <tr key={i}>
                          <td>{conferences.name}</td>
                          <td>{conferences.short_name}</td>
                          <td>{conferences.abbreviation}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Conferences;
