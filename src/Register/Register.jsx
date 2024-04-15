/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from "../PageTitle/PageTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const {registerUser,  updateProfileInfo} = useContext(AuthContext);

  const [password, showPassword] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleRegister = async (e) => {

 

    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    const photoUrl = form.get('photo');

    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const lengthRequirement = password.length >= 6;

    if (!uppercaseRegex.test(password) || !lowercaseRegex.test(password) || !lengthRequirement) {
      toast.error("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
      return;
    }

    try {
      await registerUser(email, password, name, photoUrl);
      await updateProfileInfo(name, photoUrl);
      toast.success("Registration successful!");
    } catch (error) {
      toast.error("Registration failed. Please try again later.");
      console.error(error);
    }

  };

  return (
    <div data-aos="fade-up"
    data-aos-duration="3000">
          <form
     onSubmit={handleRegister}
      className=" md:w-3/4 lg:w-1/2 border rounded-2xl p-4 mx-auto my-10"
    >
       <PageTitle title="Register"></PageTitle>
      <p className="text-3xl text-center mb-4 font-bold text-primary underline">
        Please Register
      </p>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="name"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo URL</span>
        </label>
        <input
          type="text"
          name="photo"
          placeholder="Photo url"
          className="input input-bordered"
          required
        />
      </div>
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
        <button className="btn btn-primary">Register</button>
      </div>
      <p>
        Do not have an account ? please 
        <Link className="text-primary underline text-center font-semibold" to="/login">  Login
        </Link>
      </p>
    </form>

    </div>
  );
};

export default Register;
