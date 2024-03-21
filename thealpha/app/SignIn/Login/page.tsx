import { authenticateUser } from "lib/auth";
import LoginAndRegisterForm from "Components/LandingPage/LoginAndRegisterForm";

export default function Login() {
  return (
    <div className="flex border-4 border-white w-2/5 h-3/5">
      <LoginAndRegisterForm
        passedFunction={authenticateUser}
      ></LoginAndRegisterForm>
      </div>
  );
}
