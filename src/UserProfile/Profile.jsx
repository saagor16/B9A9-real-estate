import { useContext } from "react"; 
import { AuthContext } from "../providers/AuthProvider"; 
import PageTitle from "../PageTitle/PageTitle";

const Profile = () => {
  const { user, userProfile } = useContext(AuthContext); 

  const handleUserProfile = async () => {
    userProfile()
  };



  return (
    <div className="container mx-auto mt-10 ">
      <PageTitle title="Profile"></PageTitle>
      <form className="flex gap-5 flex-col justify-center items-center" onSubmit={handleUserProfile}>
        <div className="card w-3/4 lg:w-96  h-full shadow-xl bg-cyan-500 hover:bg-cyan-600">
          <figure className="px-10 pt-10">
            <img
              src={user.photoURL || "default-avatar.jpg"} // 
              alt={user.displayName || "User"} 
              className="rounded-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Name: {user.displayName || "Unknown"}</h2>
            <p>Email: {user.email || "Unknown"}</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
