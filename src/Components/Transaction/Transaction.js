import { useRef } from "react";

function Transaction(props) {
  const arrow1 = useRef();
  const arrow2 = useRef();
  const moreInfo = useRef();

  function openClose() {
    arrow1.current.classList.toggle("downArrow_no");
    arrow2.current.classList.toggle("upArrow_yes");
    moreInfo.current.classList.toggle("moreInfo_open");
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
          <span className="downArrow" ref={arrow1}>
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </span>
          <span className="upArrow" ref={arrow2}>
            <i className="fa fa-angle-up" aria-hidden="true"></i>
          </span>
        </div>
        <div id="date">{props.date}</div>
        <div id="descr">{props.descr}</div>
        <div id="amount">{props.amount}</div>
        <div id="balance">{props.balance}</div>
      </div>
      <div className="moreInfo" ref={moreInfo}>
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
          <i className="fa fa-pencil" aria-hidden="true" onClick={addNotes}></i>
        </p>
      </div>
    </div>
  );
}

export default Transaction;
