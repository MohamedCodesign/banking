import React from "react";
import Sidebar from "../components/Sidebar";
import Image from "next/image";
import MobileNav from "../components/MobileNav";
import { getLoggedInUser } from "@/lib/Actions/user.actions";
import { redirect } from "next/navigation";
// import { useRouter } from "next/router";

async function RootLayout({ children }: LayoutProps<"/">) {
  const loggedIn = await getLoggedInUser();
  // const router = useRouter();

  if (!loggedIn) redirect("/sign-in");
  return (
    <main className=" flex h-screen font-inter w-full">
      <Sidebar user={loggedIn} />
      <div className=" flex flex-col size-full">
        <div className="root-layout">
          <Image src={"/icons/logo.svg"} width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}

export default RootLayout;
