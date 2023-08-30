import Image from "next/image";

interface UserProfileProps {
  login: boolean;
  username: string;
}

function UserProfile({ login, username }: UserProfileProps) {
  if (login) {
    return (
      <div className="flex flex-col  justify-center  ">
        <div className="m-auto my-1  cursor-pointer">
          <Image
            width={120}
            height={120}
            alt={"profile pic"}
            src={"/images/profile.jpg"}
            className="rounded-full"
          />
        </div>
        <div className="m-auto my-1  cursor-pointer">
          <p>
            Welcome <span>{username}</span>
          </p>
        </div>
        <div className="m-auto my-1  cursor-pointer">
          <p>Profile</p>
        </div>
        <hr className="w-[90%] my-3" />
      </div>
    );
  } else {
    return null;
  }
}

export default UserProfile;
