import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import PageTitle from "../PageTitle/PageTitle";
import AOS from "aos";
import "aos/dist/aos.css";

const UpdateProfile = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    const { user, updateProfileInfo } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photo = form.get("photo");

        try {
            await updateProfileInfo(name, photo);
            setSuccess(true);
        } catch (error) {
            setError("Failed to update profile. Please try again later.");
            console.error(error);
        } 
    };

    return (
        <div data-aos="fade-down"
        data-aos-duration="3000" className="border-2 border-violet-700 rounded-xl mt-5 lg:mt-10 p-5 lg:p-10 w-full lg:w-96 mx-auto">
            <PageTitle title="UpdateProfile"></PageTitle>
            <form className="flex gap-5 flex-col justify-center items-center" onSubmit={handleUpdateProfile}>
                <h1 className="font-bold text-4xl underline text-primary">My Profile</h1>
                <div>
                    <label>Your Name:</label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={user.displayName}
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>
                <div>
                    <label>Your Name:</label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={user.email}
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>
                <div>
                    <label>Image URL</label>
                    <input
                        type="text"
                        name="photo"
                        defaultValue={user.photoURL}
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>
                <button type="submit" className="btn btn-secondary px-10" >
                    
                </button>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">Profile updated successfully!</p>}
            </form>
        </div>
    );
};

export default UpdateProfile;
