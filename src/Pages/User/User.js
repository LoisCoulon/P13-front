import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateProfile } from "../../services/service";
import { saveProfile } from "../../store";

function User() {
  const userDatas = useSelector((state) => state.profile);
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  async function save() {
    try {
      const firstName = document.querySelector(".firstNameInput");
      const lastName = document.querySelector(".lastNameInput");
      if (firstName.value === "" && lastName.value !== "") {
        alert("Veuillez renseigner votre prénom");
      } else if (firstName.value !== "" && lastName.value === "") {
        alert("Veuillez renseigner votre nom");
      } else if (firstName.value === "" && lastName.value === "") {
        alert("Veuillez renseigner votre prénom et votre nom");
      } else {
        const response = await updateProfile(firstName.value, lastName.value);
        dispatch(saveProfile(response.data.body));
        setIsEdit(false);
      }
    } catch (error) {
      alert("The following error occured : " + error);
    }
  }

  return (
    <main className="main bg-dark">
      {isEdit ? (
        <div className="header">
          <h1>Welcome back</h1>
          <div className="editor">
            <input
              type="text"
              placeholder={userDatas.firstName}
              className="firstNameInput"
            />
            <input
              type="text"
              placeholder={userDatas.lastName}
              className="lastNameInput"
            />
          </div>
          <div className="editor">
            <button className="editor-button" onClick={save}>
              Save
            </button>
            <button className="editor-button" onClick={() => setIsEdit(false)}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {userDatas.firstName + " " + userDatas.lastName} !
          </h1>
          <button className="edit-button" onClick={() => setIsEdit(true)}>
            Edit Name
          </button>
        </div>
      )}
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <Link className="transaction-button" to={"../transactions"}>
            View transactions
          </Link>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <Link className="transaction-button" to={"../transactions"}>
            View transactions
          </Link>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <Link className="transaction-button" to={"../transactions"}>
            View transactions
          </Link>
        </div>
      </section>
    </main>
  );
}
export default User;
