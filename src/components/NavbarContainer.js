import Logo from "./Logo";
import NavItems from "./NavItems";

const NavbarContainer = () => {
    return (
      <div className="flex justify-between bg-purple-500 shadow-lg mb-1">
        <Logo/>
        <NavItems className="flex items-center"/>
      </div>
    );
};

export default NavbarContainer;

