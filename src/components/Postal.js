import React, { useState } from "react";
import Card from "./Card";

function Postal() {
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pincode.length !== 6) {
      setError("Postal code should be 6 digits.");
      return;
    }
    fetch(`https://api.postalpincode.in/pincode/${pincode}`)
      .then((response) => response.json())
      .then((data) => {
        if (data[0].Status === "Error") {
          setError(data[0].Message);
        } else {
          setData(data[0]);
          setError(null);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="container-fluid mt-5">
      <h2>Enter Pincode</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control rounded-pill bg-transparent text-light my-4 px-4" value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder="Pincode..." autoFocus />
        <p>{error}</p>
        <br />
        <button className="btn btn-warning rounded-pill px-5 py-2" type="submit">
          Lookup
        </button>
      </form>
      {data ? (
        <>
          <div className="container-fluid mt-5">
            <h3>Pincode : {data.PostOffice[0].Pincode}</h3>
            <h3>Message : {data.Message}</h3>
            <div className="text-center">
              <input type="text" className="form-control rounded-pill bg-transparent text-light my-3 px-4 p-2" placeholder="Filter..." />{" "}
            </div>
          </div>
        </>
      ) : null}
      {data
        ? data.PostOffice.map((value, i) => {
            return <Card {...value} key={i} />;
          })
        : null}
    </div>
  );
}

export default Postal;
