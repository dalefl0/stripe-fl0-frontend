import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ email, setEmail, password, setPassword }) => {
  const navigate = useNavigate();

  const localStorageEmail = localStorage.getItem("email");

  useEffect(() => {
    if (localStorageEmail) {
      navigate("/");
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${import.meta.env.VITE_APP_API_BASE_URL}/api/v1/users/login`, {
        email: email,
        password: password,
      })
      .then(() => {
        localStorage.setItem("email", email);
        navigate("/");
      })
      .catch((err) => navigate("/login"));
  };

  return (
    <>
      <div className="h-screen flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Log In to your account
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Or{" "}
                <Link
                  to="/signup"
                  className="font-medium text-indigo-600 hover:text-indigo-500">
                  Sign Up
                </Link>
              </p>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form onSubmit={onSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        value={email}
                        name="email"
                        type="email"
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Login;
