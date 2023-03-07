import { useEffect, useState } from "react";
import Wrapper from "../../assets/wrappers/RegisterPage.js";
import { Logo, FormRow, Alert } from "../../components/index";
import { useAppContext } from "../../context/appContext.js";
import { displayAlert } from "../../context/appContext.js";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: "",
};

export const Register = () => {
  const [values, setValues] = useState(initialState);
  const { showAlert, displayAlert } = useAppContext();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password) {
      displayAlert();
      return;
    }
  };
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "register" : "login"}</h3>
        {showAlert && <Alert />}
        {/* name */}
        {values.isMember && (
          <FormRow
            type="text"
            name="text"
            value={values.name}
            handleChange={handleChange}
            labelText="name"
          />
        )}
        {/* email */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          labelText="email"
        />
        {/* password */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          labelText="password"
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          {values.isMember ? "Already a member?" : "Not a member yet?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Login" : "Register"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
