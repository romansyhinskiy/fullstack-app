import { Link } from "react-router-dom";
import main from "../../assets/images/main.svg";
import { Logo } from "../../components";
import { Wrapper } from "./styled.js";

export const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby wolf vinyl post-ironic, seitan semiotics master cleanse
            freegan normcore scenester copper mug same lumbersexual pop-up. Big
            mood semiotics letterpress truffaut ramps vaporware fam.
          </p>
          <Link className="btn btn-hero" to="/register">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="jobify" className="img main-img" />
      </div>
    </Wrapper>
  );
};
