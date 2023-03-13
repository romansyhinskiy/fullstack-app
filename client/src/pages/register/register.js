import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../assets/wrappers/RegisterPage.js";
import { Logo, FormRow, Alert } from "../../components/index";
import { useAppContext } from "../../context/appContext.js";
import { displayAlert } from "../../context/appContext.js";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

export const Register = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const { user, showAlert, displayAlert, isLoading, registerUser, loginUser } =
    useAppContext();
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  }, [user, navigate]);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{!values.isMember ? "register" : "login"}</h3>
        {showAlert && <Alert />}
        {/* name */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
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
          <button
            type="button"
            onClick={toggleMember}
            className="member-btn"
            disabled={isLoading}
          >
            {values.isMember ? "Login" : "Register"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
