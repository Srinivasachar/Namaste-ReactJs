import { LOGO_URL } from "../utils/constant";
const Logo = () => {
    return (
      <div className="logo-container">
        <img
          className="w-36"
          src={LOGO_URL}
        />
      </div>
    );
  };

  export default Logo;