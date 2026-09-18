"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { parseStringify } from "../utils";

export async function signIn({ email, password }: signInProps) {
  try {
    const { account } = await createAdminClient();
    const responce = await account.createEmailPasswordSession({
      email,
      password,
    });
    // console.log("responce is : ", responce);
    return parseStringify(responce);
  } catch (err) {
    console.error("Error", err);
  }
}

export async function signUp(userData: SignUpParams) {
  try {
    const { account } = await createAdminClient();
    const { email, password, firstName, lastName } = userData;
    // const user = await getLoggedInUser();

    // console.log("bb");

    const newUser = await account.create({
      userId: ID.unique(),
      email,
      password,
      name: `${firstName} ${lastName}`,
    });
    const session = await account.createEmailPasswordSession({
      email,
      password,
    });

    const cookieStore = await cookies();
    cookieStore.set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    // console.log("new user : ", newUser);
    return parseStringify(newUser);
    // redirect("/account");
  } catch (err) {
    console.error("Error", err);
  }
}

// ... your initilization functions

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    return parseStringify(user);
  } catch (error) {
    return null;
  }
}

export const logoutAccount = async () => {
  try {
    const { account } = await createSessionClient();

    const fetchedCookies = await cookies();
    fetchedCookies.delete("appwrite-session");

    await account.deleteSession("current");
  } catch (err) {
    return null;
  }
};
