import React from "react";

function Search ({
    Name,
    Description,
    BranchType,
    DeliveryStatus,

}){

  return (
    <>
      <section className="search-section">
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input type="text" placeholder="Filter" onChange={(e) => setQuery(e.target.value)} />
          </div>
          {/* <button className="back-btn"></button> */}
        </form>
        <div className="card">
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  );
};

export default Search;
