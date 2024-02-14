import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import Logo from "../assets/spaces-logo.png";

const Header = () => {
  const path = useLocation().pathname
  return (
    <Navbar className="border-b-2">
      <Link to="/" className="self-center footer__logo">
        {/* <Link to='/' className='self-center w-12 h-10'> */}
        <img src={Logo} alt="spaces logo" />
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="md:w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/login">
          <Button gradientMonochrome="failure" outline>Login</Button>
        </Link>
        <Navbar.Toggle/>
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/listings'} as={'div'}>
          <Link to="/listings">Listings</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
