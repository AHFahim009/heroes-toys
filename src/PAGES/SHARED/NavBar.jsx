import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../CONTEXT-PROVIDER/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })

      .catch((error) => console.log(error));
  };

  // nav items variable
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/myToys">My Toys</Link>
      </li>
      <li>
        <Link to="/allToys">All Toys</Link>
      </li>

      <>
        <li>
          <Link to="/add">Add a Toys</Link>
        </li>
        <li className="">
          <Link onClick={handleLogout} className="block lg:hidden" to="/add">
            logout
          </Link>
        </li>
      </>
    </>
  );

  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown  ">
          <label tabIndex={0} className="btn btn-ghost px-0 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl  ">
          <img
            className="h-full w-full"
            src="https://w7.pngwing.com/pngs/188/758/png-transparent-iron-man-s-armor-edwin-jarvis-thor-captain-america-iron-man.png"
            alt=""
          />
        </Link>
        Heroes
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{navItems}</ul>
      </div>
      <div className="navbar-end gap-5">
        <div className="">
          {user && user.photoURL ? (
            <img
              className="h-[50px]  w-[50px]  rounded-full } "
              src={user?.photoURL}
              alt="User photo"
              title={user?.displayName}
            />
          ) : (
            <p>{user?.displayName}</p>
          )}
        </div>
        {user ? (
          <Link
            onClick={handleLogout}
            to="/login"
            className=" hidden lg:block "
          >
            Logout
          </Link>
        ) : (
          <Link to="/login" className=" ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
