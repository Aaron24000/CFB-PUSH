const Venues = ({ stadiums, loading }) => {
    if (loading) {
        return <h4>Loading...</h4>
    }

    return (
        <div className="card">
                <div className="card-header">
                  <h4>List Of Stadiums</h4>
                </div>
                <table className="table table-striped">
                  <thead className="table-dark">
                    <tr>
                      <th>Name</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Capacity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stadiums
                      .sort(function (a, b) {
                        if (a.name.toLowerCase() < b.name.toLowerCase())
                          return -1;
                        if (a.name.toLowerCase() > b.name.toLowerCase())
                          return 1;
                        return 0;
                      })
                      .map((stadiums, i) => (
                        <tr key={i}>
                          <td>{stadiums.name}</td>
                          <td>{stadiums.city}</td>
                          <td>{stadiums.state}</td>
                          <td>{stadiums.capacity}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
    )
}

export default Venues;