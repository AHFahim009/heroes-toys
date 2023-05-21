import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../CONTEXT-PROVIDER/AuthProvider";
import SocialLogin from "../SHARED/SOCIAL_LOGIN/SocialLogIn";

const Login = () => {
  //---------------

  const { singIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //* [ firebase login with email & password  / when user login successfully send logged user data to server site ("/jwt") for generated token  & (res.send)=> jwt token  / set this token in local storage / finally  navigated redirect location  ]

    singIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row  ">
        <div className=" w-full lg:w-1/2">
          <img
            src="https://img.lovepik.com/element/45007/0204.png_860.png"
            alt=""
          />
        </div>
        <div className=" w-full lg:w-1/2">
          <h1 className="text-center text-3xl mb-4">Please Login</h1>
          <div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-xl font-bold mb-2"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-xl font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-6 leading-tight focus:outline-none focus:shadow-outline"
                  name="password"
                  type="password"
                  placeholder="password"
                  required
                />
                <p className="text-red-500 text-xl italic"></p>
              </div>
              <div className="flex flex-col-reverse gap-2 lg:flex-row items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Login
                </button>
                <p
                  className="inline-block align-baseline font-bold text-sm tracking-wider "
                  href="#"
                >
                  If you have no an account ? Please
                  <Link className="underline text-blue-500 ms-1" to="/register">
                    Register
                  </Link>
                </p>
              </div>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
