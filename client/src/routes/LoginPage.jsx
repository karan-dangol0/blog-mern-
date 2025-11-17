import React from "react";
import { SignIn } from "@clerk/clerk-react";

const LoginPage = () => {
  return (
    <div className="h-[cal(100vh-256px)]   flex justify-center items-center">
      <SignIn signUpUrl="/register" />
    </div>
  );
};

export default LoginPage;
