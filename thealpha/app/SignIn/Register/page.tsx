import { createNewUser } from "lib/auth";
import LoginAndRegisterForm from "Components/LandingPage/LoginAndRegisterForm";

export default function Register(): JSX.Element {
  return (
      <div className="flex border-4 border-white w-2/5 h-3/5">
        <div className="w-1/2">
          <LoginAndRegisterForm passedFunction={createNewUser}></LoginAndRegisterForm>
        </div>
        <div className="w-1/2 h-full bg-black flex justify-center items-center">
          <p className="text-white text-lg font-bold">
            Are you ready to escape the matrix?
          </p>
        </div>
      </div>
  );
}
