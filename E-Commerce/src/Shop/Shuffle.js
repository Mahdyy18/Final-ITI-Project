import React from "react";

function Shuffle({ shuffle, onShowAll }) {
  return (
    <div>
      <div className="container col-xs-12 my-3 text-center">
        <div className="row">
          <div className="col-xs-12 mx-auto">
            <button className="btn btn-dark mx-1" onClick={onShowAll}>ALL</button>
            <button className="btn btn-outline-dark mx-1" onClick={shuffle}>NEW</button>
            <button className="btn btn-outline-dark mx-1" onClick={shuffle}>TRENDS</button>
            <button className="btn btn-outline-dark mx-1" onClick={shuffle}>CUSTOM</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shuffle;
