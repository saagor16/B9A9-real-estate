/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from "../PageTitle/PageTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { LogIn, googleLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [password, showPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    try {
      const result = await LogIn(email, password);
      console.log(result.user);
    } catch (error) {
      console.error(error);
      toast.error("Invalid email or password");
    }
  };
  const handleSocialLogin = (provider) => {
    provider()
      .then((result) => {
        console.log(result.user);
        toast("successfully logged in");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("something went wrong");
        console.log(error);
      });
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="bg-lime-100 md:w-3/4 lg:w-[720px] border rounded-2xl p-2 mx-auto my-10"
    >
      <PageTitle title="Login"></PageTitle>
      <p className="text-3xl text-center mb-4 font-bold text-lime-400 underline">
        Please Login
      </p>
      <div className="w-full p-8 space-y-3 rounded-xl  text-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center text-center  space-y-3">
        <button
            onClick={() => handleSocialLogin(googleLogin)}
            aria-label="Log in with Google"
            className="p-3  text-black flex items-center border lg:w-3/4 rounded-xl border-black gap-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <h2 className="text-black">googleLogin</h2>
          </button>
          <button
            onClick={() => handleSocialLogin(githubLogin)}
            aria-label="Log in with GitHub"
            className="p-3  text-black flex items-center border lg:w-3/4 rounded-xl border-black gap-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
            <h2 className="text-black">githubLogin</h2>
          </button>
        </div>
        <p className="text-orange-200 text-center font-semibold">
          Click on the Icon
        </p>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
      </div>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="mb-4 relative border">
            <input
              className="w-full py-2 px-4"
              type={password ? "text" : "password"}
              name="password"
              placeholder="Password"
              id=""
              required
            />
            <span
              className="absolute top-3 right-2"
              onClick={() => showPassword(!password)}
            >
              {password ? <FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>}
            </span>
          </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      <div className="divider"></div>

      <p className="text-center">
        Do not have an account ? please
        <Link
          className="text-primary underline text-center font-semibold"
          to="/register"
        >
          {" "}
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
