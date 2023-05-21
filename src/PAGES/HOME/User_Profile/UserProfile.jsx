import { useContext } from "react";
import { AuthContext } from "../../../CONTEXT-PROVIDER/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <div className="flex flex-col items-center justify-center py-16 bg-gray-100">
        <h1 className="text-center text-3xl mb-3">Profile</h1>
        <div className=" max-w-xl w-full px-4">
          <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
            <div className="flex items-center mb-6">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src={
                  user
                    ? user.photoURL
                    : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                }
              />
              <div>
                <p className="text-lg font-semibold">
                  {user ? user.displayName : "Super Hero"}
                </p>
                <p className="text-gray-600">A Superhero Toy Enthusiast</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              Hello there! My name is {user ? user.displayName : "Super Hero"},
              and I'm a passionate superhero toy lover. For as long as I can
              remember, these incredible figures have held a special place in my
              heart and sparked my imagination. Growing up, I was captivated by
              the extraordinary abilities and captivating stories of
              superheroes. From the pages of comic books to the big screen,
              these characters became my heroes, and collecting their toys
              became a way for me to bring their adventures to life in my own
              little world.
            </p>
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
