import { useContext } from "react";
import { AuthContext } from "../../CONTEXT-PROVIDER/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const { createUser, updateUserData } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password, photo);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserData(result.user, name, photo);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });

    // const form = event.target;
  };
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row  ">
        <div className=" w-full lg:w-1/2">
          <img
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=740&t=st=1684598478~exp=1684599078~hmac=62a93d9c843a0c1b6a6dcf48e9160366ab018f2485bda662e269674192578856"
            alt=""
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-center text-3xl mb-1">Please Register</h1>
          <div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-xl font-bold mb-2"
                  htmlFor="text"
                >
                  Your Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-xl font-bold mb-2"
                  htmlFor="email"
                >
                  Photo URL
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="photo"
                  placeholder=""
                />
              </div>
              <div className="mb-4">
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
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-xl font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="password"
                  required
                />
                {/* display error success massage */}
                <p className="text-red-500 text-xs italic"></p>
                <p className="text-red-500 text-xs italic"></p>
              </div>
              <div className="flex flex-col-reverse gap-2 lg:flex-row  items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register
                </button>
                <p
                  className="inline-block align-baseline font-bold text-sm t"
                  href="#"
                >
                  Already have an account ? Please
                  <Link className="text-blue-500 underline ms-1" to="/login">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
