import { useState } from "react";

function Transaction(props) {
  const [isUp, setIsUp] = useState(false);

  function openClose() {
    setIsUp(!isUp);
  }

  function selectCategory() {
    alert("Choisir une catégorie");
  }

  function addNotes() {
    alert("Ajouter des notes");
  }

  return (
    <div>
      <div className="dataLine">
        <div id="arrow" onClick={openClose}>
          {isUp ? (
            <i className="fa fa-angle-up" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          )}
        </div>
        <div id="date">{props.date}</div>
        <div id="descr">{props.descr}</div>
        <div id="amount">{props.amount}</div>
        <div id="balance">{props.balance}</div>
      </div>
      {isUp && (
        <div className="moreInfo">
          <p>Transaction Type: {props.transType}</p>
          <p>
            Category: {props.category}{" "}
            <i
              className="fa fa-pencil"
              aria-hidden="true"
              onClick={selectCategory}
            ></i>
          </p>
          <p>
            Notes:{" "}
            <i
              className="fa fa-pencil"
              aria-hidden="true"
              onClick={addNotes}
            ></i>
          </p>
        </div>
      )}
    </div>
  );
}

export default Transaction;
