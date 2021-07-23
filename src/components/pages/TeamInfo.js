import axios from "axios";
import { useState, useEffect } from "react";
import tokenData from "../../config.json";
import { Fragment } from "react";
import Dropdown from "../dropdown/Dropdown";

const TeamInfo = (props) => {
  const [conferences, setConferences] = useState({
    selectedConference: "",
    listOfConferencesFromAPI: [],
  });
  const [teams, setTeams] = useState({
    selectedTeams: "",
    listOfTeamsFromAPI: [],
  });

  useEffect(() => {
    axios
      .get("/conferences", {
        headers: {
          contentType: "application/json",
          Authorization: `Bearer ${tokenData.API_KEY}`,
        },
      })
      .then((conferenceRes) => {
        setConferences({
          selectedConference: conferences.selectedConference,
          listOfConferencesFromAPI: conferenceRes.data,
        });
        console.log(conferenceRes.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const conferenceChanged = (val) => {
    setConferences({
      selectedConference: val,
      listOfConferencesFromAPI: conferences.listOfConferencesFromAPI,
    });

    axios
      .get(`/teams?conference=${val}`, {
        headers: {
          contentType: "application/json",
          Authorization: `Bearer ${tokenData.API_KEY}`,
        },
      })
      .then((teamsResponse) => {
        console.log(teamsResponse);
        setTeams({
          selectedTeams: teams.selectedTeams,
          listOfTeamsFromAPI: teamsResponse.data,
        });
      });
  };

  return (
    <Fragment>
      <header id="conferences-header" className="py-2 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>
                <i className="fas fa-users mb-2"></i> Team Information
              </h1>
            </div>
          </div>
        </div>
      </header>

      <section id="search" className="py-4 mb-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ml-auto">
              <div className="input-group">
                <form>
                  <Dropdown
                    label="Conference"
                    options={conferences.listOfConferencesFromAPI}
                    selectedValue={conferences.selectedConference}
                    changed={conferenceChanged}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams by conference */}
      <section id="conferences">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <h4>List Of Conferences</h4>
                </div>
                <table className="table table-responsive table-striped">
                  <thead className="table-dark">
                    <tr>
                      <th>School</th>
                      <th>Mascot</th>
                      <th>Abbreviation</th>
                      <th>Team Color</th>
                      <th>Team Alt-Color</th>
                      <th>Logo</th>
                      <th>Stadium Name</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Stadium Capacity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teams.listOfTeamsFromAPI
                      .map((conferences, i) => (
                        <tr key={i}>
                          <td>{conferences.school}</td>
                          <td>{conferences.mascot}</td>
                          <td>{conferences.abbreviation}</td>
                          <td>{conferences.color}</td>
                          <td>{conferences.alt_color}</td>
                          <td><img src={conferences.logos[0]} alt={conferences.name} style={{width: '40px'}}></img></td>
                          <td>{conferences.location.name}</td>
                          <td>{conferences.location.city}</td>
                          <td>{conferences.location.state}</td>
                          <td>{conferences.location.capacity}</td>
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

export default TeamInfo;
