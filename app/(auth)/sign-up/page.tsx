import AuthForm from "@/app/components/AuthForm";
import { getLoggedInUser } from "@/lib/Actions/user.actions";
import React from "react";

async function SignUp() {
  const user = await getLoggedInUser();
  // console.log(user);
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
}

export default SignUp;
