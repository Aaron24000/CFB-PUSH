import axios from "axios";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import Pagination from "../pagination/Pagination";
import Venues from "../posts/Stadiums";

const Stadiums = () => {
  const [stadiums, setStadiums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [stadiumsPerPage, setStadiumsPerPage] = useState(34);


  //   const { name, short_name, abbreviation } = state;

  useEffect(() => {
      const fetchStadiums = async () => {
          setLoading(true);
          const res = await axios.get('/venues', {
              headers: {
                  contentType: 'application/json',
                  Authorization: `Bearer Sdnuv8U0ma/1UAzk8BRtp59LBuqq6Xzqcq1yg4cVng19f80mek+nja4yNpz1zbwh`
              }
          });
          setStadiums(res.data);
          setLoading(false);
      }

      fetchStadiums();
  }, []);

  // Get current posts
  const indexOfLastStadium = currentPage * stadiumsPerPage;
  const indexOfFirstStadium = indexOfLastStadium - stadiumsPerPage;
  const currentStadiums = stadiums.slice(indexOfFirstStadium, indexOfLastStadium);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Fragment>
      <header id="conferences-header" className="py-2 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>
                <i className="fas fa-house-user mb-2"></i> Stadiums
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Stadiums table */}
      <section id="stadiums">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col">
                <Venues stadiums={currentStadiums} loading={loading} />
                <Pagination stadiumsPerPage={stadiumsPerPage} totalPosts={stadiums.length} paginate={paginate} />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Stadiums;
