import React from "react";
import Sidebar from "../components/Sidebar";
import Image from "next/image";
import MobileNav from "../components/MobileNav";

function RootLayout({ children }: LayoutProps<"/">) {
  const loggedIn = { firstName: "Adrian", lastName: "jsm" };
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
