import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/company">Company</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/newproject">NewProject</Link>
    </div>
  );
}
export default Navbar
