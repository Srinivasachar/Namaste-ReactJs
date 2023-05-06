import { LOGO_URL } from "../utils/constant";
const Logo = () => {
    return (
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
    );
  };

  export default Logo;