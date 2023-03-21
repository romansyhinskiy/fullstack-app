import { useEffect, useState } from "react";
import { useAppContext } from "../../context/appContext.js";

import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { FormRow } from "../../components";
import { Alert } from "../../components";

export const Profile = () => {
  const { user, showAlert, isLoading, displayAlert, updateUser } =
    useAppContext();
  const [email, setEmail] = useState(user?.email);
  const [name, setName] = useState(user?.name);
  const [location, setLocation] = useState(user?.location);
  const [lastName, setLastName] = useState(user?.lastName);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !name || !location || !lastName) {
      displayAlert();
      return;
    }
    updateUser({ email, name, location, lastName });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile </h3>
        {showAlert && <Alert />}

        {/* name */}
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            labelText="last name"
            type="text"
            name="lastName"
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormRow
            type="email"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />

          <FormRow
            type="text"
            name="location"
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
