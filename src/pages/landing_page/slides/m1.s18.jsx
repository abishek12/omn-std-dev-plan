import React, { useEffect, useState } from "react";

const M1S18 = ({ fetchCoreValues }) => {
  const [coreValues, setCoreValues] = useState([]);

  useEffect(() => {
    // Fetch submitted core values from API
    const loadCoreValues = async () => {
      const data = await fetchCoreValues();
      setCoreValues(data);
    };
    loadCoreValues();
  }, [fetchCoreValues]);

  return (
    <div className="row">
      <div className="col-12 p-3">
        <h2 className="text-center fw-bold mb-3">Your Submitted Core Values</h2>

        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Core Value</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {coreValues.length > 0 ? (
              coreValues.map((value, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value.name}</td>
                  <td>{value.description}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center">
                  No core values submitted yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default M1S18;
